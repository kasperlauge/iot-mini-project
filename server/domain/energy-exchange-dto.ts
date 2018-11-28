import { DataEntry } from "./data-entry";

export class EnergyExchangeDto {
  unit = "MWh";
  exhangeSweden: number;
  exchangeGermany: number;
  exchangeNorway: number;
  timestamp: Date;

  public static fromDataEntry(de: DataEntry) {
    const energyExchangeDto = new EnergyExchangeDto();
    energyExchangeDto.exhangeSweden =
      de.bornholmSwedenExchange +
      de.zealandSwedenExchange +
      de.jutlandSwedenExchange;
    energyExchangeDto.exchangeGermany =
      de.jutlandGermanyExchange + de.zealandGermanyExchange;
    energyExchangeDto.exchangeNorway = de.jutlandNorwayExchange;
    energyExchangeDto.timestamp = de.timestamp;
    return energyExchangeDto;
  }

  public static fromObject(obj: any): EnergyExchangeDto {
    const energyExchangeDto = new EnergyExchangeDto();
    energyExchangeDto.exhangeSweden = obj.exhangeSweden;
    energyExchangeDto.exchangeGermany = obj.exchangeGermany;
    energyExchangeDto.exchangeNorway = obj.exchangeNorway;
    energyExchangeDto.timestamp = obj.timestamp;
    return energyExchangeDto;
  }
}
