import { TouristPlan } from "../../interfaces/tourisPlan.interface";

export interface ITouristPlanService {
    getTouristPlanById(touristPlanId: string): Promise<TouristPlan | null>;
    getTouristPlansList(): Promise<TouristPlan[]>
    deleteById(touristPlanId: string): Promise<TouristPlan | null>;
    updateById(touristPlanId:string, newTouristPlan: TouristPlan): Promise<TouristPlan | null>;
    createTouristPlan(touristPlan:TouristPlan):  Promise<TouristPlan | null>;
}