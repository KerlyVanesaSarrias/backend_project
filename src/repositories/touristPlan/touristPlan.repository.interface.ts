import { TouristPlan } from "../../interfaces/tourisPlan.interface";
import { CreateTouristPlan } from "../../services/tourisPlan/touristPlan.service.interface";


export interface ITouristPlanRepository {
    findAll(cityId?: string): Promise<TouristPlan[]>
    findById(toristPlanId: string): Promise<TouristPlan | null>
    deleteById(touristPlanId: string): Promise<TouristPlan | null>
    updateById(touristPlanId: string, newTouristPlan: TouristPlan): Promise<TouristPlan | null>
    createTouristPlan(touristPlanId: CreateTouristPlan): Promise<TouristPlan>
}