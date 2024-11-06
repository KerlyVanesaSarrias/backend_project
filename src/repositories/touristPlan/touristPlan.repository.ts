import { TouristPlan } from '../../interfaces/tourisPlan.interface';
import TouristPlanModel from "../../models/touristPlan.model";
import { CreateTouristPlan } from '../../services/tourisPlan/touristPlan.service.interface';
import { ITouristPlanRepository } from "./touristPlan.repository.interface";

export class TouristPlanRepository implements ITouristPlanRepository {
   
    async findAll(): Promise<TouristPlan[]> {
      const toristPlansList = await TouristPlanModel.find();
      return toristPlansList;
    }

    async findById(toristPlanId: string): Promise<TouristPlan | null> {
      const toristPlan = await TouristPlanModel.findById(toristPlanId);
      return toristPlan;
    }

    async deleteById(toristPlanId: string): Promise<TouristPlan | null> {
      const toristPlanDelete = await TouristPlanModel.findOneAndDelete({_id: toristPlanId});
      return toristPlanDelete;
    }

    async updateById(toristPlanId: string, newTouristPlan: TouristPlan): Promise<TouristPlan | null> {
      const toristPlanUpdate = await TouristPlanModel.findByIdAndUpdate(toristPlanId, newTouristPlan, { new: true });
      return toristPlanUpdate;
    }

    async createTouristPlan(toristPlan: CreateTouristPlan): Promise<TouristPlan> {
      const toristPlanCreate = await TouristPlanModel.create(toristPlan);
      console.log('toristPlanCreate: ', toristPlanCreate)
      return toristPlanCreate;
    }


}