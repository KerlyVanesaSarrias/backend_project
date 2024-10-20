import { Request, Response } from "express";
import { UserService } from "../services/user/user.service";
import { UserRepository } from "../repositories/user/user.repository";

const userRepo = new UserRepository();
const userService = new UserService(userRepo);

export class UserController {
  async getUser(req: Request, res: Response) {
    const userId = req.params.userId;
    const user = await userService.getUserById(userId);
    res.json(user);
  }
}
