import { User } from '../../interfaces/user.interface';
import UserModel from "../../models/user.model";
import { IUserRepository, UserByEmailOrNickParams } from "./user.repository.interface";

export class UserRepository implements IUserRepository {
   
    async findAll(): Promise<User[]> {
      const usersList = await UserModel.find().select('-password');
      return usersList;
    }

    async findById(userId: string): Promise<User | null> {
      const user = await UserModel.findById(userId).select('-password');
      return user;
    }

    async deleteById(userId: string): Promise<User | null> {
      const userDelete = await UserModel.findOneAndDelete({id: userId});
      return userDelete;
    }
    
    async updateById(userId: string, newUser: User): Promise<User | null> {
      const userUpdate = await UserModel.findByIdAndUpdate(userId, newUser, { new: true }).select('-password');
      return userUpdate;
    }

    async createUser(user: User): Promise<User> {
      const userCreate = await UserModel.create(user);
      console.log('userCreate: ', userCreate)
      return userCreate;
    }

    async findUserByEmailOrNick({email, nick}: UserByEmailOrNickParams): Promise<User | null> {
      const existingUser = await UserModel.findOne({$or: [{ email: email?.toLowerCase() }, { nick: nick?.toLowerCase() }]}).select('-password');
      return existingUser
    }
    
    async updateAvatar(userId: string, avatarUrl: string) {
      const userUpdated = await UserModel.findByIdAndUpdate(
        userId,
        { image: avatarUrl },
        { new: true }
      );
  
      return userUpdated;
    }
}