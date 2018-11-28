import { DataEntry } from "./data-entry";

export class TotalEnergyDto {
  totalEnergy: number;
  unit = "MWh";
  totalGreenEnergy: number;
  totalNonGreenEnergy: number;
  timestamp: Date;

  public static fromDataEntry(de: DataEntry) {
    const totalEnergyDto = new TotalEnergyDto();
    totalEnergyDto.timestamp = de.timestamp;
    totalEnergyDto.totalNonGreenEnergy =
      de.deCentralPowerplantDK1 +
      de.deCentralPowerplantDK2 +
      de.centralPowerplantDK1 +
      de.centralPowerplantDK2;
    totalEnergyDto.totalGreenEnergy =
      de.landmillsDK +
      de.seamillsDK +
      de.solarCellsDK1 +
      de.solarCellsDK2;
    totalEnergyDto.totalEnergy =
      totalEnergyDto.totalNonGreenEnergy + totalEnergyDto.totalGreenEnergy;
    return totalEnergyDto;
  }

  public static fromObject(obj: any): TotalEnergyDto {
    const totalEnergyDto = new TotalEnergyDto();
    totalEnergyDto.totalEnergy = obj.totalEnergy;
    totalEnergyDto.unit = obj.unit;
    totalEnergyDto.totalGreenEnergy = obj.totalGreenEnergy;
    totalEnergyDto.totalNonGreenEnergy = obj.totalNonGreenEnergy;
    totalEnergyDto.timestamp = obj.timestamp;
    return totalEnergyDto;
  }
}
