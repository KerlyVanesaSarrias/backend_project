import { Router } from "express";
import { UserController } from '../controllers/user.controller';
import { validate } from "../middlewares/validate.middlewarw";
import { loginValidationSchema, userCreateValidationShema } from "../validations/user.validation";
import { ensureAuth } from "../middlewares/auth";
import { ROLES } from "../constants";


const userController = new UserController();
const router = Router();

router.get("/",ensureAuth([ROLES.CLIENT,ROLES.ADMIN]), userController.getUsersList)
router.get("/:userId",ensureAuth([ROLES.SUPER_ADMIN]), userController.getUser)
router.delete("/user", ensureAuth([ROLES.CLIENT]), userController.deleteUser)
router.put("/user", ensureAuth([ROLES.CLIENT]), userController.updateUser)
router.post("/create", validate(userCreateValidationShema), userController.createUser)
router.post("/login", validate(loginValidationSchema), userController.login);
router.get("/profile", ensureAuth([ROLES.CLIENT,ROLES.ADMIN]), userController.profile)


export default router;