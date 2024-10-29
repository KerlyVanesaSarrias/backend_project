import { Router } from "express";
import { UserController } from '../controllers/user.controller';
import { validate } from "../middlewares/validate.middlewarw";
import { loginValidationSchema, userCreateValidationShema } from "../validations/user.validation";

const userController = new UserController();
const router = Router();

router.get("/", userController.getUsersList)

router.get("/user/:userId",userController.getUser)

router.delete("/user/:userId", userController.deleteUser)

router.put("/user/:userId", userController.updateUser)

router.post("/user/create", validate(userCreateValidationShema), userController.createUser)

router.post('/user/login', validate(loginValidationSchema), userController.login);

export default router;