import { Router } from "express";
import { LocationController } from '../controllers/location.controller';
import { ensureAuth } from "../middlewares/auth";
import { ROLES } from "../constants";


const locationController = new LocationController();
const router = Router();

router.get("/", locationController.getLocationList)
router.get("/cities", locationController.getCities)
router.delete("/:locationId", ensureAuth([ROLES.ADMIN]), locationController.deleteLocation)
router.put("/:locationId", ensureAuth([ROLES.CLIENT]), locationController.updateLocation)
router.post("/create",ensureAuth([ROLES.ADMIN]), locationController.createLocation)



export default router;