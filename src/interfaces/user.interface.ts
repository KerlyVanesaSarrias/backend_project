export interface User {
  id: string;
  name: string;
  lastName: string;
  nick:string;
  age: number;
  email: string;
  password: string;
  phoneNumber: string;
  image: string;
  roles:string[];
  createdAt: Date;

}