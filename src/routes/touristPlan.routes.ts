import { Router } from "express";
import { TouristPlanController } from '../controllers/touristPlan.controller';
import { ensureAuth } from "../middlewares/auth";
import { ROLES } from "../constants";
import { uploads } from "../middlewares/multerFiles";

const touristPlanController = new TouristPlanController();
const router = Router();

router.get("/", touristPlanController.getTouristPlansList)
router.get("/:touristPlanId", touristPlanController.getTouristPlan)
router.delete("/", touristPlanController.deleteTouristPlan)
router.put("/:id", touristPlanController.updateTouristPlan)
router.post("/create", ensureAuth([ROLES.CLIENT, ROLES.ADMIN]), touristPlanController.createTouristPlan)
router.put("/:touristPlanId/cover-image", 
    ensureAuth([ROLES.CLIENT, ROLES.ADMIN]), 
    uploads.single('coverimage'),
    touristPlanController.updateCoverImage
);
router.put("/:touristPlanId/images", 
    ensureAuth([ROLES.CLIENT, ROLES.ADMIN]), 
    uploads.array('images', 5),
    touristPlanController.updateImages
);
export default router;