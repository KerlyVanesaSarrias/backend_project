import { User } from "../../interfaces/user.interface";
import { waitTime } from "../../utils/helper";
import { IUserRepository } from "./user.repository.interface";

export class UserRepository implements IUserRepository {

    async findById(userId: string): Promise<User | null> {
    //TO DO: change logic for mongo methods
      await waitTime(1000) 
      const userMock: User = {
        id: '1234',
        name: 'John Doe',
        lastName: 'Sarrias',
        email: 'john.doe@example.com',
        age: 24,
      }
      return userMock;
    }
    
}