import { User } from "../../interfaces/user.interface";
import UserModel from "../../models/user.model";
import { IUserRepository } from "./user.repository.interface";

export class UserRepository implements IUserRepository {
    async findAll(): Promise<User[]> {
      const usersList = await UserModel.find();
      return usersList;
    }

    async findById(userId: string): Promise<User | null> {
      const user = await UserModel.findById(userId);
      return user;
    }
    

}