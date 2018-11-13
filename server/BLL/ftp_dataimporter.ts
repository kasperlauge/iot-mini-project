import * as Client from "ftp";
import { Promise } from "mongoose";
import { model } from "mongoose";
import { IDataEntryDocument } from "../models/data-entry.model";

const dataEntry = model<IDataEntryDocument>("dataEntry");

const csv = require('csvtojson')
//const file_path_name: String = "onlinedata/"


export function foo() {
    // FTP stuff here
    var ftp_client = new Client();

    // const file_path = "onlinedata/20091209_onlinedata.txt"

    getlist(ftp_client).then((data) => {
        //ftp_client.end()


        console.log(data.length)

        //Get each datafile
        data.forEach(element => {
            get_file_from_ftp(ftp_client, 'onlinedata/' + element.name)
        });
    });


    function get_file_from_ftp(ftp_client: Client, filename: string) {

        ftp_client.get(filename, function (err, stream) {


            //let dataLength: number = 0

            let filedata: String = "";
            //console.log(filename)
            stream
                .on('data', function (chunk) { filedata = filedata.concat(chunk.toString('utf8')); })
                .on('end', function () {  // done
                    //console.log('The length was:', dataLength);
                    //console.log(filedata)


                    //Remove the description on top of the data page
                    let lines = filedata.split('\n');
                    lines.splice(0, 21);
                    let newlines = lines.join('\n')

                    //Make csv into json data
                    csv({
                        noheader: false,
                        headers: ['timestamp', 'centralPowerplantDK1', 'centralPowerplantDK2', 'deCentralPowerplantDK1', 'deCentralPowerplantDK2', 'windmill1', 'windmill2', 'jutlandNorwayExchange', 'jutlandSwedenExchange', 'jutlandGermanyExchange', 'zealandSwedenExchange', 'zealandGermanyExchange', 'bornholmSwedenExchange', 'funenZealandExchange', 'temperatureMalling', 'windMalling', 'co2', 'seamillsDK', 'landmillsDK', 'solarCellsDK1', 'solarCellsDK2'],
                        delimiter: [';']
                    }).fromString(newlines).then((jsondata) => {

                        //The csv is esstially wrong, this is a quickfix :)
                        jsondata.forEach(element => {
                            delete element.field22

                            const newDataEntry = new dataEntry(element)
                            newDataEntry.save().then((res) => {
                                //console.log("Success")
                            })
                        });
                    });
                });
        });

    }

    function getlist(ftp_client: Client) {
        return new Promise((resolve, reject) => {
            ftp_client.on("ready", function () {
                ftp_client.list("onlinedata", function (err, list) {
                    if (err) console.log(err);

                    //

                    let date: Date = new Date('2018-01-01');


                    dataEntry.count(function (err, count) {
                        if (count != 0) {

                            dataEntry.find().sort({ "timestamp": -1 }).limit(1)
                                .exec(function (err, docs) {
                                    date = docs[0].timestamp

                                    list = list.filter(function (element) {
                                        return (new Date(element.date) > date);
                                    });
                                    return resolve(list)
                                })
                        }
                        else {
                            list = list.filter(function (element) {
                                return (new Date(element.date) > date);
                            });
                            return resolve(list)
                        }
                    })
                });

            });
        });
    }


    ftp_client.connect({
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD
    });

}

// function filter_files_by_date(files, date: Date) {

//     console.log(files.length)

//     files = files.filter(function (element) {
//         return (new Date(element.date) > date);
//     });

// }