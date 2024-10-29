import { User } from "../../interfaces/user.interface";


export interface LoginResponse {
    token: string;
    user: User;
}

export interface IUserService {
    getUserById(userId: string): Promise<User | null>;
    getUsersList(): Promise<User[]>
    deleteById(userId: string): Promise<User | null>;
    updateById(userId:string, newUser: User): Promise<User | null>;
    createUser(user:User):  Promise<User | null>;
    login(email: string, password: string): Promise<LoginResponse | null>
}