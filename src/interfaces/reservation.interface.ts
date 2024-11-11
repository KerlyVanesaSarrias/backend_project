import { Types } from "mongoose";
import { TouristPlan } from "./tourisPlan.interface";
import { User } from "./user.interface";


export interface Reservation {
    _id?: string;
    user: User | Types.ObjectId;
    touristPlan: TouristPlan | Types.ObjectId;
    checkIn: Date;
    checkOut: Date;
    createdAt?: Date;  
};

export interface CreateReservationBody {
    touristPlanId: string;
    checkIn: string; 
    checkOut: string
}