import { ObjectId, Schema, Types } from 'mongoose';
import { TouristPlan } from '../../interfaces/tourisPlan.interface';
import { cities } from '../../constants/index';
import { City } from '../../interfaces/location.interface';


export interface CreateTouristPlan {
    id?: string;
    location: Types.ObjectId; 
    name: string;
    description: string;
    address: string;
    price: number;
    coverImage:String,
    images?: string[];
    available?: boolean; 
    createdBy: Types.ObjectId;  
    createdAt?: Date;  
}
export interface ITouristPlanService {
    getTouristPlanById(touristPlanId: string): Promise<TouristPlan | null>;
    getTouristPlansList(cityId?: string): Promise<TouristPlan[]>
    deleteById(touristPlanId: string): Promise<TouristPlan | null>;
    updateById(toristPlanId: string, updateData: Partial<CreateTouristPlan>): Promise<TouristPlan | null>
    createTouristPlan(touristPlan: CreateTouristPlan, userId: string):  Promise<TouristPlan | null>;
}