import headers  from 'express';
export interface User {
  id: string;
  name: string;
  lastName: string;
  nick:string;
  age: number;
  email: string;
  password?: string;
  phoneNumber: string;
  image: string;
  roles:string[];
  createdAt: Date;
}

export interface LoginBody {
  email: string;
  password: string;

}

export interface AuthUser {
  id: string;
  name: string;
  roles: string[]
}

