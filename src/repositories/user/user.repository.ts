import { User } from '../../interfaces/user.interface';
import UserModel from "../../models/user.model";
import { IUserRepository, UserByEmailOrNickParams } from "./user.repository.interface";

export class UserRepository implements IUserRepository {
   
    async findAll(): Promise<User[]> {
      const usersList = await UserModel.find();
      return usersList;
    }

    async findById(userId: string): Promise<User | null> {
      const user = await UserModel.findById(userId);
      return user;
    }

    async deleteById(userId: string): Promise<User | null> {
      const userDelete = await UserModel.findOneAndDelete({_id: userId});
      return userDelete;
    }

    async updateById(userId: string, newUser: User): Promise<User | null> {
      const userUpdate = await UserModel.findByIdAndUpdate(userId, newUser, { new: true });
      return userUpdate;
    }

    async createUser(user: User): Promise<User> {
      const userCreate = await UserModel.create(user);
      console.log('userCreate: ', userCreate)
      return userCreate;
    }

    async findUserByEmailOrNick({email, nick}: UserByEmailOrNickParams): Promise<User | null> {
      const existingUser = await UserModel.findOne({$or: [{ email: email?.toLowerCase() }, { nick: nick?.toLowerCase() }]});
      return existingUser
    }

}