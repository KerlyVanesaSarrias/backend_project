import { Request, Response } from "express";
import { UserService } from "../services/user/user.service";
import { UserRepository } from "../repositories/user/user.repository";
import { AuthUser, LoginBody, User } from "../interfaces/user.interface";

const userRepo = new UserRepository();
const userService = new UserService(userRepo);

export class UserController {
  async getUser(req: Request, res: Response) {
    const userId = req.params.userId;
    const user = await userService.getUserById(userId);
    res.json(user);
  }

  async getUsersList(req: Request, res: Response) {
    const users = await userService.getUsersList();
    res.json(users);
  }

  async deleteUser(req: Request, res: Response) {
    const userId = res.locals.user as AuthUser;
    await userService.deleteById(userId.id);
    res.json({ message: "User deleted successfully" });
  }

  async updateUser(req: Request, res: Response) {
    const userToken = res.locals.user as AuthUser;
    const userId = userToken.id;
    const user = req.body;
    const updatedUser = await userService.updateById(userId, user);
    res.json(updatedUser);
  }

  async createUser(req: Request, res: Response) {
    try {
      const user = req.body;
      const createdUser = await userService.createUser(user);
      if (createdUser) {
        res.status(200).json({
          status: "created",
          message: "User created successfully",
          data: createdUser,
        });
      } else {
        res.status(400).json({ message: "Existing user" });
      }
    } catch (e) {
      console.error("createUser error:", e);
      if (e instanceof Error) {
        res.status(400).json({ message: e.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body as LoginBody;
    try {
      const loginResponse = await userService.login(email, password);

      if (!loginResponse) {
        res.status(401).json({ message: "Invalid credential" });
        return;
      }
      res.status(200).json({
        status: "loggedIn",
        message: "User logged in successfully",
        data: loginResponse,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async profile(req: Request, res: Response) {
    const userToken = res.locals.user as AuthUser;
    const userId = userToken.id;
    if (!userId) {
      res.status(401).send({
        status: "success",
        message: "Unathenticated user",
      });
      return;
    }
    const userProfile = await userService.getUserById(userId);

    if (!userProfile) {
      res.status(404).send({
        status: "success",
        message: "Usuario not found",
      });
      return;
    }

      res.status(200).json({
      status: "success",
      user: userProfile,
    });
  }


}
