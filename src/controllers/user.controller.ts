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

  async getUsersList(req: Request, res: Response){
    const users = await userService.getUsersList();
    res.json(users);
  }

  async deleteUser(req: Request, res: Response) {
    const userId = req.params.userId;
    await userService.deleteById(userId);
    res.json({ message: "User deleted successfully" });
  }

  async updateUser(req: Request, res: Response){
    const userId = req.params.userId;
    const user = req.body;
    const updatedUser = await userService.updateById(userId, user);
    res.json(updatedUser);
  }

  
  async createUser(req: Request, res: Response){
    const user = req.body
    const createdUser = await userService.createUser(user);
    res.json(createdUser);
  }
}
