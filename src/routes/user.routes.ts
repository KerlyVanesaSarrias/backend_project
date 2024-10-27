import { Router } from "express";
import { UserController } from '../controllers/user.controller';

const userController = new UserController();
const router = Router();

router.get("/", userController.getUsersList)

router.get("/user/:userId", userController.getUser)

router.post("/user",(req, res) =>{
    res.json('Users created')
})

export default router;