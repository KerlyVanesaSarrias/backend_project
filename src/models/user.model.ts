import { model, Schema } from "mongoose";
import { User } from "../interfaces/user.interface";
import { ROLES } from "../constants";

const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nick: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    image: {
        type: String,
        default: "default_user.png"
    },
    roles: {
        type: [String],
        default: [ROLES.CLIENT],
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const UserModel = model<User>('User', userSchema)

export default UserModel