import { Response, Request, NextFunction } from "express";
import { IDataEntryDocument } from "../models/data-entry.model";
import { model } from "mongoose";
import { DataEntry } from "../domain/data-entry";

const dataEntry = model<IDataEntryDocument>("dataEntry");

export function getDataEntries(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const page = req.query.page ? Number(req.query.page) : 1;
  const size = req.query.size ? Number(req.query.size) : 10;
  dataEntry
    .find()
    .skip((page - 1) * size)
    .limit(size)
    .then(dataEntries => {
      res.status(200).json(dataEntries.map(d => DataEntry.fromObject(d)));
    });
}

export function getDataEntry(req: Request, res: Response, next: NextFunction) {
  const id = String(req.params["dataEntryId"]);
  if (id === "") {
    res.sendStatus(400);
    return;
  }

  dataEntry.findById(id).then(entry => {
    res.status(200).json(DataEntry.fromObject(entry));
  });
}

export function insertDataEntry(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const newDataEntry = new dataEntry({
    timestamp: new Date(req.body["timestamp"]),
    centralPowerplantDK1: req.body["centralPowerplantDK1"],
    centralPowerplantDK2: req.body["centralPowerplantDK2"],
    deCentralPowerplantDK1: req.body["deCentralPowerplantDK1"],
    deCentralPowerplantDK2: req.body["deCentralPowerplantDK2"],
    windmill1: req.body["windmill1"],
    windmill2: req.body["windmill2"],
    jutlandNorwayExchange: req.body["jutlandNorwayExchange"],
    jutlandSwedenExchange: req.body["jutlandSwedenExchange"],
    jutlandGermanyExchange: req.body["jutlandGermanyExchange"],
    zealandSwedenExchange: req.body["zealandSwedenExchange"],
    zealandGermanyExchange: req.body["zealandGermanyExchange"],
    bornholmSwedenExchange: req.body["bornholmSwedenExchange"],
    funenZealandExchange: req.body["funenZealandExchange"],
    temperatureMalling: req.body["temperatureMalling"],
    windMalling: req.body["windMalling"],
    co2: req.body["co2"],
    seamillsDK: req.body["seamillsDK"],
    landmillsDK: req.body["landmillsDK"],
    solarCellsDK1: req.body["solarCellsDK1"],
    solarCellsDK2: req.body["solarCellsDK2"]
  });

  newDataEntry.save().then(de => {
    res.status(201).json(DataEntry.fromObject(de));
  });
}
