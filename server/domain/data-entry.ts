export class DataEntry {
    _id: any;
    timestamp: Date;
    centralPowerplantDK1: number;
    centralPowerplantDK2: number;
    deCentralPowerplantDK1: number;
    deCentralPowerplantDK2: number;
    windmill1: number;
    windmill2: number;
    jutlandNorwayExchange: number;
    jutlandSwedenExchange: number;
    jutlandGermanyExchange: number;
    zealandSwedenExchange: number;
    zealandGermanyExchange: number;
    bornholmSwedenExchange: number;
    funenZealandExchange: number;
    temperatureMalling: number;
    windMalling: number;
    co2: number;
    seamillsDK: number;
    landmillsDK: number;
    solarCellsDK1: number;
    solarCellsDK2: number;

    public static fromObject(obj: any): DataEntry {
        const dataEntry = new DataEntry();
        dataEntry._id = obj._id;
        dataEntry.timestamp = obj.timestamp;
        dataEntry.centralPowerplantDK1 = obj.centralPowerplantDK1;
        dataEntry.centralPowerplantDK2 = obj.centralPowerplantDK2;
        dataEntry.deCentralPowerplantDK1 = obj.deCentralPowerplantDK1;
        dataEntry.deCentralPowerplantDK2 = obj.deCentralPowerplantDK2;
        dataEntry.windmill1 = obj.windmill1;
        dataEntry.windmill2 = obj.windmill2;
        dataEntry.jutlandNorwayExchange = obj.jutlandNorwayExchange;
        dataEntry.jutlandSwedenExchange = obj.jutlandSwedenExchange;
        dataEntry.jutlandGermanyExchange = obj.jutlandGermanyExchange;
        dataEntry.zealandSwedenExchange = obj.zealandSwedenExchange;
        dataEntry.zealandGermanyExchange = obj.zealandGermanyExchange;
        dataEntry.bornholmSwedenExchange = obj.bornholmSwedenExchange;
        dataEntry.funenZealandExchange = obj.funenZealandExchange;
        dataEntry.temperatureMalling = obj.temperatureMalling;
        dataEntry.windMalling = obj.windMalling;
        dataEntry.co2 = obj.co2;
        dataEntry.seamillsDK = obj.seamillsDK;
        dataEntry.landmillsDK = obj.landmillsDK;
        dataEntry.solarCellsDK1 = obj.solarCellsDK1;
        dataEntry.solarCellsDK2 = obj.solarCellsDK2;
        return dataEntry;
    }
}