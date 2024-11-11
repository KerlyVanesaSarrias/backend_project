
import { cities, ROLES } from "../../constants";
import { City } from "../../interfaces/location.interface";
import { TouristPlan } from "../../interfaces/tourisPlan.interface";
import { User } from "../../interfaces/user.interface";
import UserModel from "../../models/user.model";
import { ITouristPlanRepository } from "../../repositories/touristPlan/touristPlan.repository.interface";
import { CreateTouristPlan, ITouristPlanService } from "./touristPlan.service.interface";

export class TouristPlanService implements ITouristPlanService {
  private touristPlanRepository: ITouristPlanRepository;

  constructor(touristPlanRepository: ITouristPlanRepository) {
    this.touristPlanRepository = touristPlanRepository;
  }

  async getTouristPlansList(cityId?: string): Promise<TouristPlan[]> {
    const touristPlansList = await this.touristPlanRepository.findAll(cityId);
    const touristPlansWithCity = touristPlansList.map(touristPlan => {
      const city = cities.find(city => city.id === touristPlan.location.city) ?? {} as City;
      touristPlan.location.city = city;
      return touristPlan;
    })
    return touristPlansWithCity;
  }

  async getTouristPlanById(touristPlanId: string): Promise<TouristPlan | null> {
    const touristPlanById = await this.touristPlanRepository.findById(touristPlanId);
    if (touristPlanById) {
      const city = cities.find(city => city.id === touristPlanById.location.city) ?? {} as City;
      touristPlanById.location.city = city;
    }
    return touristPlanById;
  }

  async deleteById(touristPlanId: string): Promise<TouristPlan | null> {
    const touristPlanDelete = await this.touristPlanRepository.deleteById(touristPlanId);
    return touristPlanDelete;
  }

  async updateById(toristPlanId: string, updateData: Partial<CreateTouristPlan>): Promise<TouristPlan | null> {
    const existingTouristPlan = await this.touristPlanRepository.findById(toristPlanId);
    
    if (!existingTouristPlan) {
      throw new Error('Tourist Plan not found');
    }
    
    return this.touristPlanRepository.updateById(toristPlanId, updateData);
  }

  async createTouristPlan(touristPlan: CreateTouristPlan, userId: string): Promise<TouristPlan | null> {
    const touristPlanCreate = await this.touristPlanRepository.createTouristPlan({...touristPlan});
    if(touristPlanCreate){
      const user = await UserModel.findById(userId).lean();
      if(user){
        const newUser: User = {
          ...user,
          roles: [ROLES.ADMIN, ROLES.CLIENT]
        }
        await UserModel.findByIdAndUpdate(userId, newUser)
      }
    }
    return touristPlanCreate;
  }
}