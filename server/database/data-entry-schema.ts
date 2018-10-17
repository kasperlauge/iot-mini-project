import { Schema } from "mongoose";

export default new Schema({
  timestamp: Date,
  centralPowerplantDK1: Number,
  centralPowerplantDK2: Number,
  deCentralPowerplantDK1: Number,
  deCentralPowerplantDK2: Number,
  windmill1: Number,
  windmill2: Number,
  jutlandNorwayExchange: Number,
  jutlandSwedenExchange: Number,
  jutlandGermanyExchange: Number,
  zealandSwedenExchange: Number,
  zealandGermanyExchange: Number,
  bornholmSwedenExchange: Number,
  funenZealandExchange: Number,
  temperatureMalling: Number,
  windMalling: Number,
  co2: Number,
  seamillsDK: Number,
  landmillsDK: Number,
  solarCellsDK1: Number,
  solarCellsDK2: Number
});
