import { Router } from "express";
import { getCo2Emission } from "../controllers/co2.controller";

const router = Router();

router.route("/").get(getCo2Emission);

export default router;
