import { Document } from "mongoose";
import { DataEntry } from "../domain/data-entry";

export interface IDataEntryDocument extends DataEntry, Document {}
