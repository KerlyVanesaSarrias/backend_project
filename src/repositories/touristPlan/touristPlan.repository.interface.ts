import { TouristPlan } from "../../interfaces/tourisPlan.interface";
import { CreateTouristPlan } from "../../services/tourisPlan/touristPlan.service.interface";


export interface ITouristPlanRepository {
    findAll(cityId?: string): Promise<TouristPlan[]>
    findById(toristPlanId: string): Promise<TouristPlan | null>
    deleteById(touristPlanId: string): Promise<TouristPlan | null>
    updateById(toristPlanId: string, updateData: Partial<CreateTouristPlan>): Promise<TouristPlan | null>
    createTouristPlan(touristPlanId: CreateTouristPlan): Promise<TouristPlan>
}