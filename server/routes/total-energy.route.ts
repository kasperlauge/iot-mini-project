import { Router } from "express";
import {
  getEnergy,
  getGreenEnergy,
  getResourceEnergy,
  getEnergyExchange
} from "../controllers/energy.controller";

const router = Router();

router.route("/").get(getEnergy);
router.route("/green").get(getGreenEnergy);
router.route("/resource").get(getResourceEnergy);
router.route("/exchange").get(getEnergyExchange);

export default router;
