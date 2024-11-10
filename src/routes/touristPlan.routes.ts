import { Router } from "express";
import { TouristPlanController } from '../controllers/touristPlan.controller';
import { validate } from "../middlewares/validate.middlewarw";
import { ensureAuth } from "../middlewares/auth";
import { ROLES } from "../constants";


const touristPlanController = new TouristPlanController();
const router = Router();

router.get("/", touristPlanController.getTouristPlansList)

router.get("/:touristPlanId", touristPlanController.getTouristPlan)

router.delete("/", touristPlanController.deleteTouristPlan)

router.put("/", touristPlanController.updateTouristPlan)

router.post("/create", ensureAuth([ROLES.CLIENT, ROLES.ADMIN]), touristPlanController.createTouristPlan)

export default router;