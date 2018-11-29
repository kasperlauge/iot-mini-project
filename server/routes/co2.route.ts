import { Router } from "express";
import {
  getCo2Emission,
  getCurrentCo2Emission
} from "../controllers/co2.controller";

const router = Router();

router.route("/").get(getCo2Emission);
router.route("/current").get(getCurrentCo2Emission);

export default router;
