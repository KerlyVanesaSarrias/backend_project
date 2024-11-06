import { Router } from "express";
import { TouristPlanController } from '../controllers/touristPlan.controller';
import { validate } from "../middlewares/validate.middlewarw";
import { ensureAuth } from "../middlewares/auth";


const touristPlanController = new TouristPlanController();
const router = Router();

router.get("/", touristPlanController.getTouristPlansList)

router.get("/touristPlan/:touristPlanId", touristPlanController.getTouristPlan)

router.delete("/touristPlan", touristPlanController.deleteTouristPlan)

router.put("/touristPlan", touristPlanController.updateTouristPlan)

router.post("/touristPlan/create", touristPlanController.createTouristPlan)



export default router;