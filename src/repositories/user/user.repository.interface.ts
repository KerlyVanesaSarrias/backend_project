import { User } from "../../interfaces/user.interface";

export interface IUserRepository {
    findById(userId: string): Promise<User | null> 
    findAll(): Promise<User[]>
}