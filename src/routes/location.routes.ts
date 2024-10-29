import { Router } from "express";
import { LocationController } from '../controllers/location.controller';


const locationController = new LocationController();
const router = Router();

router.get("/", locationController.getLocationList)


export default router;