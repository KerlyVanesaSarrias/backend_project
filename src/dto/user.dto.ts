import { User } from "../interfaces/user.interface";

export const toUserDto = (data: User & { _id?: string }): User => {
  return {
    id: data._id ?? "",
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    roles: data.roles,
    createdAt: data.createdAt,
    nick: data.nick,
    image: data.image,
    phoneNumber: data.phoneNumber,
    age: data.age,
    password: data.password
  };
};
