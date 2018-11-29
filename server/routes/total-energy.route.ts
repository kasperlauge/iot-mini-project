import { Router } from "express";
import {
  getEnergy,
  getGreenEnergy,
  getResourceEnergy,
  getEnergyExchange,
  getCurrentTotalEnergy,
  getCurrentGreenEnergy,
  getCurrentResourceEnergy,
  getCurrentExchangeEnergy
} from "../controllers/energy.controller";

const router = Router();

router.route("/").get(getEnergy);
router.route("/current").get(getCurrentTotalEnergy);
router.route("/green").get(getGreenEnergy);
router.route("/green/current").get(getCurrentGreenEnergy);
router.route("/resource").get(getResourceEnergy);
router.route("/resource/current").get(getCurrentResourceEnergy);
router.route("/exchange").get(getEnergyExchange);
router.route("/exchange/current").get(getCurrentExchangeEnergy);

export default router;
