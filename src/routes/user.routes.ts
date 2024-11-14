import { Router } from "express";
import { UserController } from '../controllers/user.controller';
import { validate } from "../middlewares/validate.middlewarw";
import { loginValidationSchema, userCreateValidationShema } from "../validations/user.validation";
import { ensureAuth } from "../middlewares/auth";
import { ROLES } from "../constants";



const userController = new UserController();
const router = Router();
/**
 * @swagger
 * /users:
 *      get:
 *          summary: get user list
 */
router.get("/",ensureAuth([ROLES.CLIENT,ROLES.ADMIN]), userController.getUsersList)
router.get("/profile", ensureAuth([ROLES.CLIENT, ROLES.ADMIN]), userController.profile)
router.get("/user/:userId",ensureAuth([ROLES.SUPER_ADMIN]), userController.getUser)
router.delete("/user", ensureAuth([ROLES.CLIENT]), userController.deleteUser)
router.put("/user", ensureAuth([ROLES.CLIENT]), userController.updateUser)
router.post("/create", validate(userCreateValidationShema), userController.createUser)
router.post("/login", validate(loginValidationSchema), userController.login);



export default router;