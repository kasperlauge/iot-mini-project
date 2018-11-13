import { Router } from "express";
import { getEnergy, getGreenEnergy } from "../controllers/energy.controller";

const router = Router();

router.route("/").get(getEnergy);
router.route("/green").get(getGreenEnergy);

export default router;
