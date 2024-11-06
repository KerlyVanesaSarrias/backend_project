import { Router } from "express";
import { LocationController } from '../controllers/location.controller';
import { ensureAuth } from "../middlewares/auth";


const locationController = new LocationController();
const router = Router();

router.get("/", locationController.getLocationList)
router.get("/:locationId", locationController.getLocationById)
router.delete("/:locationId", ensureAuth(["admin"]), locationController.deleteLocation)
router.put("/:locationId", ensureAuth(['client']), locationController.updateLocation)
router.post("/create",ensureAuth(['admin']), locationController.createLocation)



export default router;