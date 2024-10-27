import { User } from "../../interfaces/user.interface";

export interface IUserService {
    getUserById(userId: string): Promise<User | null>;
}