import { Router } from "express";
import { UserController } from '../controllers/user.controller';
import { validate } from "../middlewares/validate.middlewarw";
import { loginValidationSchema, userCreateValidationShema } from "../validations/user.validation";
import { ensureAuth } from "../middlewares/auth";


const userController = new UserController();
const router = Router();

router.get("/",ensureAuth(['client','admin']), userController.getUsersList)
router.get("/user/:userId",ensureAuth(["super-admin"]), userController.getUser)
router.delete("/user", ensureAuth(["client"]), userController.deleteUser)
router.put("/user", ensureAuth(['client']), userController.updateUser)
router.post("/user/create", validate(userCreateValidationShema), userController.createUser)
router.post("/user/login", validate(loginValidationSchema), userController.login);
router.get("/user", ensureAuth(['client','admin']), userController.profile)


export default router;