import { Response, Request, NextFunction } from "express";
import { IDataEntryDocument } from "../models/data-entry.model";
import { model } from "mongoose";
import { DataEntry } from "../domain/data-entry";
import { TotalEnergyDto } from "../domain/total-energy-dto";
import { GreenEnergyDto } from "../domain/green-energy-dto";
import { ResourceEnergyDto } from "../domain/resource-energy-dto";
import { EnergyExchangeDto } from "../domain/energy-exchange-dto";

const dataEntry = model<IDataEntryDocument>("dataEntry");

export function getEnergy(req: Request, res: Response, next: NextFunction) {
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
            .map(d => TotalEnergyDto.fromDataEntry(DataEntry.fromObject(d)))
            .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
        );
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
}

export function getCurrentTotalEnergy(
  req: Request,
  res: Response,
  next: NextFunction
) {
  dataEntry
    .findOne()
    .sort({ timestamp: -1 })
    .then(dataEntry => {
      res.status(200).json(TotalEnergyDto.fromDataEntry(dataEntry));
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
}

export function getGreenEnergy(
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
            .map(d => GreenEnergyDto.fromDataEntry(DataEntry.fromObject(d)))
            .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
        );
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
}

export function getCurrentGreenEnergy(
  req: Request,
  res: Response,
  next: NextFunction
) {
  dataEntry
    .findOne()
    .sort({ timestamp: -1 })
    .then(dataEntry => {
      res.status(200).json(GreenEnergyDto.fromDataEntry(dataEntry));
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
}

export function getResourceEnergy(
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
            .map(d => ResourceEnergyDto.fromDataEntry(DataEntry.fromObject(d)))
            .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
        );
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
}

export function getCurrentResourceEnergy(
  req: Request,
  res: Response,
  next: NextFunction
) {
  dataEntry
    .findOne()
    .sort({ timestamp: -1 })
    .then(dataEntry => {
      res.status(200).json(ResourceEnergyDto.fromDataEntry(dataEntry));
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
}

export function getEnergyExchange(
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
            .map(d => EnergyExchangeDto.fromDataEntry(DataEntry.fromObject(d)))
            .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
        );
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
}

export function getCurrentExchangeEnergy(
  req: Request,
  res: Response,
  next: NextFunction
) {
  dataEntry
    .findOne()
    .sort({ timestamp: -1 })
    .then(dataEntry => {
      res.status(200).json(EnergyExchangeDto.fromDataEntry(dataEntry));
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
}
