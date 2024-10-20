import { response, Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json('Users list')
})

router.get("/user/:userId",(req, res) =>{
    res.json('Users gets vane')
})

router.post("/user",(req, res) =>{
    res.json('Users created')
})

export default router;