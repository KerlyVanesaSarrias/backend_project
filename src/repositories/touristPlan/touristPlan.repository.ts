import { TouristPlan } from '../../interfaces/tourisPlan.interface';
import TouristPlanModel from "../../models/touristPlan.model";
import { CreateTouristPlan } from '../../services/tourisPlan/touristPlan.service.interface';
import { ITouristPlanRepository } from "./touristPlan.repository.interface";

export class TouristPlanRepository implements ITouristPlanRepository {
   
    async findAll(cityId?: string): Promise<TouristPlan[]> {
      const toristPlansList = await TouristPlanModel.find()
      .select('-__v -createAt')
      .populate({
        path: 'location',
        select: '-_id -__v -createdAt',
      })
      .populate({
        path: 'createdBy',
        select: '-_id -password -roles -__v -createdAt'
      }).lean();

      return cityId ? toristPlansList.filter(row => row.location.city === cityId) : toristPlansList;
    }

    async findById(toristPlanId: string): Promise<TouristPlan | null> {
      const toristPlan = await TouristPlanModel.findById(toristPlanId).select('-__v -createAt')
      .populate({
        path: 'location',
        select: '-_id -__v -createdAt',
      })
      .populate({
        path: 'createdBy',
        select: '-_id -password -roles -__v -createdAt'
      }).lean();
      return toristPlan;
    }

    async deleteById(toristPlanId: string): Promise<TouristPlan | null> {
      const toristPlanDelete = await TouristPlanModel.findOneAndDelete({id: toristPlanId});
      return toristPlanDelete;
    }

    async updateById(toristPlanId: string, updateData: Partial<CreateTouristPlan>): Promise<TouristPlan | null> {
      const updatedTouristPlan = await TouristPlanModel.findByIdAndUpdate(toristPlanId, updateData, { new: true })
        .select('-__v -createdAt')
        .populate({
          path: 'location',
          select: '-_id -__v -createdAt',
        })
        .populate({
          path: 'createdBy',
          select: '-_id -password -roles -__v -createdAt',
        })
        .lean();
    
      return updatedTouristPlan;
    }

    async createTouristPlan(toristPlan: CreateTouristPlan): Promise<TouristPlan> {
      const toristPlanCreate = await TouristPlanModel.create(toristPlan);
      return toristPlanCreate;
    }


}