import { DataEntry } from "./data-entry";

export class ResourceEnergyDto {
  unit = "MWh";
  powerPlants: number;
  seamills: number;
  landmills: number;
  solarCells: number;
  timestamp: Date;

  public static fromDataEntry(de: DataEntry) {
    const resourceEnergyDto = new ResourceEnergyDto();
    resourceEnergyDto.landmills = de.landmillsDK;
    resourceEnergyDto.seamills = de.seamillsDK;
    resourceEnergyDto.timestamp = de.timestamp;
    resourceEnergyDto.solarCells = de.solarCellsDK1 + de.solarCellsDK2;
    resourceEnergyDto.powerPlants =
      de.deCentralPowerplantDK1 +
      de.deCentralPowerplantDK2 +
      de.centralPowerplantDK1 +
      de.centralPowerplantDK2;
    return resourceEnergyDto;
  }

  public static fromObject(obj: any): ResourceEnergyDto {
    const resourceEnergyDto = new ResourceEnergyDto();
    resourceEnergyDto.unit = obj.unit;
    resourceEnergyDto.powerPlants = obj.powerPlants;
    resourceEnergyDto.seamills = obj.seamills;
    resourceEnergyDto.landmills = obj.landmills;
    resourceEnergyDto.solarCells = obj.solarCells;
    resourceEnergyDto.timestamp = obj.timestamp;
    return resourceEnergyDto;
  }
}
