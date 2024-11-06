import { Location } from "./location.interface";
import { User } from "./user.interface";

export interface TouristPlan {
    id: string;
    location: Location; 
    name: string;
    description: string;
    address: string;
    price: number;
    coverImage:String,
    images: string[];
    available?: boolean; 
    createdBy: User;  
    createdAt?: Date;  
}

export interface CreateTouristPlanBody {
    location: Location; 
    name: string;
    description: string;
    address: string;
    price: number;
}