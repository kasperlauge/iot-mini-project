import { connect, connection, model } from "mongoose";
import { IDataEntryDocument } from "../models/data-entry.model";
import dataEntrySchema from "./data-entry-schema";

const dbURI = process.env.IOT_MONGODB_URI;

connect(dbURI);

connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", arg => {
  console.log("Connected to database");
});

// Initialize different mongoose schemas

model<IDataEntryDocument>("dataEntry", dataEntrySchema);
