import { Router } from "express";
import {
  getDataEntries,
  insertDataEntry,
  getCurrentDataEntry,
  getDataEntry
} from "../controllers/data-entry.controller";

const router = Router();

router
  .route("/")
  .get(getDataEntries)
  .post(insertDataEntry);

router.route("/current").get(getCurrentDataEntry);

router.route("/:dataEntryId").get(getDataEntry);

export default router;
