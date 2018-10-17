import { Router } from "express";
import {
  getDataEntry,
  getDataEntries,
  insertDataEntry
} from "../controllers/data-entry.controller";

const router = Router();

router
  .route("/")
  .get(getDataEntries)
  .post(insertDataEntry);

router.route("/:dataEntryId").get(getDataEntry);

export default router;
