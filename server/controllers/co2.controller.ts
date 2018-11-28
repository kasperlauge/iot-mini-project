import { NextFunction, Request, Response } from "express";
import { model } from "mongoose";
import { DataEntry } from "../domain/data-entry";
import { IDataEntryDocument } from "../models/data-entry.model";
import { Co2EmissionDto } from "../domain/co2-emission-dto";

const dataEntry = model<IDataEntryDocument>("dataEntry");

export function getCo2Emission(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const start = req.query.start ? new Date(req.query.start) : null;
  const end = req.query.end ? new Date(req.query.end) : null;

  if (start === null || end === null) {
    res
      .status(400)
      .json({ error: "Missing query parameters: 'start' and 'end'" });
    return;
  }

  dataEntry
    .find({
      timestamp: {
        $gte: new Date(start),
        $lte: new Date(end)
      }
    })
    .then(dataEntries => {
      res
        .status(200)
        .json(
          dataEntries
            .map(d => Co2EmissionDto.fromDataEntry(DataEntry.fromObject(d)))
            .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
        );
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
}
