import { User } from "../../interfaces/user.interface";
import UserModel from "../../models/user.model";
import { IUserRepository } from "./user.repository.interface";

export class UserRepository implements IUserRepository {

    async findById(userId: string): Promise<User | null> {
      const usersList = UserModel.findById(userId);
      return usersList;
    }
    
}