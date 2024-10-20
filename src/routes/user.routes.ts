import { response, Router } from "express";

const router = Router();

router.get("/user/:userId",(req, res) =>{
    res.json('Users gets vane')
})

router.get("/", (req, res) => {
    res.json('Users list')
})

router.post("/user",(req, res) =>{
    res.json('Users created')
})

router.delete("/user/:userId", (req, res) =>{
    res.json('User deleted')
})

export default router;