import { Router } from "express";
import { UserController } from '../controllers/user.controller';
import { validate } from "../middlewares/validate.middlewarw";
import { loginValidationSchema, userCreateValidationShema } from "../validations/user.validation";
import { ensureAuth } from "../middlewares/auth";


const userController = new UserController();
const router = Router();

router.get("/",ensureAuth, userController.getUsersList)

router.get("/user/:userId",ensureAuth, userController.getUser)

router.delete("/user", ensureAuth, userController.deleteUser)

router.put("/user", ensureAuth, userController.updateUser)

router.post("/user/create", validate(userCreateValidationShema), userController.createUser)

router.post("/user/login", validate(loginValidationSchema), userController.login);

router.get("/user", ensureAuth, userController.profile)


export default router;