import { User } from "../../interfaces/user.interface";
import { IUserRepository } from "../../repositories/user/user.repository.interface";
import { IUserService, LoginResponse } from "./user.servise.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUsersList(): Promise<User[]> {
    const usersList = await this.userRepository.findAll();
    return usersList;
  }

  async getUserById(userId: string): Promise<User | null> {
    const user = await this.userRepository.findById(userId);
    return user;
  }

  async deleteById(userId: string): Promise<User | null> {
    const userDelete = await this.userRepository.deleteById(userId);
    return userDelete;
  }

  async updateById(userId: string, newUser: User): Promise<User | null> {
    const userUpdate = await this.userRepository.updateById(userId, newUser);
    return userUpdate;
  }

  async createUser(user: User): Promise<User | null> {
    const existingUser = await this.userRepository.findUserByEmailOrNick({
      email: user.email,
      nick: user.nick,
    });
    if (existingUser) return null;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password ?? "", saltRounds);

    const userCreate = await this.userRepository.createUser({
      ...user,
      password: hashedPassword,
    });

    return userCreate;
  }

  async login(email: string, password: string): Promise<LoginResponse | null> {
    const user = await this.userRepository.findUserByEmailOrNick({ email });
    if (!user) return null;

    const isPasswordValid = bcrypt.compare(password, user.password ?? "");
    if (!isPasswordValid) return null;

    const token = jwt.sign(
      { id: user._id, email: user.email, roles: user.roles },
      process.env.SECRET_KEY as string,
      { expiresIn: "24h" }
    );
    if(!token) return null;
    
    return { token, user: user };
  }
}
