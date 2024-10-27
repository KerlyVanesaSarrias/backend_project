import { toUserDto } from "../../dto/user.dto";
import { User } from "../../interfaces/user.interface";
import { IUserRepository } from "../../repositories/user/user.repository.interface";
import { IUserService } from "./user.servise.interface";

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUserById(userId: string): Promise<User | null> {
    const user = await this.userRepository.findById(userId);
    return user ? toUserDto(user) : null;
  }
}
