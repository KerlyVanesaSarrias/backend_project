import { Router } from "express";
import { UserController } from '../controllers/user.controller';

const userController = new UserController();
const router = Router();

router.get("/", (req, res) => {
    res.json('Users list')
})

router.get("/user/:userId", userController.getUser)

router.post("/user",(req, res) =>{
    res.json('Users created')
})

export default router;