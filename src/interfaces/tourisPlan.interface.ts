import { ObjectId } from "mongoose";

export interface TouristPlan {
    id: string;
    locationId: ObjectId | Location; 
    name: string;
    description: string;
    address: string;
    price: number;
    coverImage:String,
    images: string[];
    available?: boolean; 
    created_by: ObjectId;  
    created_at?: Date;  
}