import { Router } from "express";
import { getEnergy } from "../controllers/energy.controller";

const router = Router();

router.route("/").get(getEnergy);

export default router;
