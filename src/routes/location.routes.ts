import { Router } from "express";
import { LocationController } from '../controllers/location.controller';


const locationController = new LocationController();
const router = Router();

router.get("/", locationController.getLocationList)
router.get("/:locationId", locationController.getLocationById)


export default router;