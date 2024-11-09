import { Types } from "mongoose";
import { TouristPlan } from "./tourisPlan.interface";
import { User } from "./user.interface";

export interface Reservation {
    id: string;
    userId: User | Types.ObjectId; 
    touristPlanId: TouristPlan | Types.ObjectId;
    checkIn: Date;
    checkOut: Date;
    status: boolean; 
    createdAt?: Date;  
};