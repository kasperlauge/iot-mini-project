import { DataEntry } from "./data-entry";

export class Co2EmissionDto {
  unit = "g/kWh";
  co2: number;
  timestamp: Date;

  public static fromDataEntry(de: DataEntry) {
    const co2EmissionDto = new Co2EmissionDto();
    co2EmissionDto.co2 = de.co2;
    co2EmissionDto.timestamp = de.timestamp;
    return co2EmissionDto;
  }

  public static fromObject(obj: any): Co2EmissionDto {
    const co2EmissionDto = new Co2EmissionDto();
    co2EmissionDto.co2 = obj.co2;
    co2EmissionDto.timestamp = obj.timestamp;
    return co2EmissionDto;
  }
}
