import { DataEntry } from "./data-entry";

export class GreenEnergyDto {
  unit = "MWh";
  totalGreenEnergy: number;
  ratioOfTotalEnergy: number;
  timestamp: Date;

  public static fromDataEntry(de: DataEntry) {
    const greenEnergyDto = new GreenEnergyDto();
    greenEnergyDto.timestamp = de.timestamp;
    const totalNonGreenEnergy =
      de.deCentralPowerplantDK1 +
      de.deCentralPowerplantDK2 +
      de.centralPowerplantDK1 +
      de.centralPowerplantDK2;
    greenEnergyDto.totalGreenEnergy =
      de.landmillsDK +
      de.seamillsDK +
      de.windmill1 +
      de.windmill2 +
      de.solarCellsDK1 +
      de.solarCellsDK2;
    greenEnergyDto.ratioOfTotalEnergy =
      greenEnergyDto.totalGreenEnergy /
      (greenEnergyDto.totalGreenEnergy + totalNonGreenEnergy);
    return greenEnergyDto;
  }

  public static fromObject(obj: any): GreenEnergyDto {
    const greenEnergyDto = new GreenEnergyDto();
    greenEnergyDto.unit = obj.unit;
    greenEnergyDto.totalGreenEnergy = obj.totalGreenEnergy;
    greenEnergyDto.ratioOfTotalEnergy = obj.ratioOfTotalEnergy;
    greenEnergyDto.timestamp = obj.timestamp;
    return greenEnergyDto;
  }
}
