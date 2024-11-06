import { TouristPlan } from "../../interfaces/tourisPlan.interface";


export interface ITouristPlanRepository {
    findAll(): Promise<TouristPlan[]>
    findById(toristPlanId: string): Promise<TouristPlan | null>
    deleteById(touristPlanId: string): Promise<TouristPlan | null>
    updateById(touristPlanId: string, newTouristPlan: TouristPlan): Promise<TouristPlan | null>
    createTouristPlan(touristPlanId: TouristPlan): Promise<TouristPlan>

}