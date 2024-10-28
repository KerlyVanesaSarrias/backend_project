import { toUserDto } from "../../dto/user.dto";
import { User } from "../../interfaces/user.interface";
import UserModel from "../../models/user.model";
import { IUserRepository } from "../../repositories/user/user.repository.interface";
import { IUserService } from "./user.servise.interface";

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

 async getUsersList(): Promise<User[]> {
    const usersList = await this.userRepository.findAll();
    return usersList.map((user) => toUserDto(user));
  }

  async getUserById(userId: string): Promise<User | null> {
    const user = await this.userRepository.findById(userId);
    return user ? toUserDto(user) : null;
  }

  async deleteById(userId: string): Promise<User | null> {
    const userDelete = await this.userRepository.deleteById(userId);
    return userDelete ? toUserDto(userDelete) : null;
  }

  async updateById(userId:string, newUser: User ): Promise<User | null> {
    const userUpdate = await this.userRepository.updateById(userId, newUser);
    return userUpdate ? toUserDto(userUpdate) : null;
  }

  async createUser(user: User ): Promise<User | null> {
    const existingUser = await this.userRepository.findUserByEmailOrNick({ email: user.email, nick: user.nick });
    if(existingUser) return null;

    const userCreate = await this.userRepository.createUser(user);
    return toUserDto(userCreate);
  }
}
