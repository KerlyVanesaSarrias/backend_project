
import { cities } from "../../constants";
import { City } from "../../interfaces/location.interface";
import { TouristPlan } from "../../interfaces/tourisPlan.interface";
import { ITouristPlanRepository } from "../../repositories/touristPlan/touristPlan.repository.interface";
import { CreateTouristPlan, ITouristPlanService } from "./touristPlan.service.interface";

export class TouristPlanService implements ITouristPlanService {
  private touristPlanRepository: ITouristPlanRepository;

  constructor(touristPlanRepository: ITouristPlanRepository) {
    this.touristPlanRepository = touristPlanRepository;
  }

  async getTouristPlansList(): Promise<TouristPlan[]> {
    const touristPlansList = await this.touristPlanRepository.findAll();
    const touristPlansWithCity = touristPlansList.map(touristPlan => {
      const city = cities.find(city => city.id === touristPlan.location.city) ?? {} as City;
      touristPlan.location.city = city;
      return touristPlan;
    })

    return touristPlansWithCity;
  }

  async getTouristPlanById(touristPlanId: string): Promise<TouristPlan | null> {
    const touristPlan = await this.touristPlanRepository.findById(touristPlanId);
    return touristPlan;
  }

  async deleteById(touristPlanId: string): Promise<TouristPlan | null> {
    const touristPlanDelete = await this.touristPlanRepository.deleteById(touristPlanId);
    return touristPlanDelete;
  }

  async updateById(touristPlanId: string, newTouristPlan: TouristPlan): Promise<TouristPlan | null> {
    const touristPlanUpdate = await this.touristPlanRepository.updateById(touristPlanId, newTouristPlan);
    return touristPlanUpdate;
  }

  async createTouristPlan(touristPlan: CreateTouristPlan): Promise<TouristPlan | null> {
    const touristPlanCreate = await this.touristPlanRepository.createTouristPlan({...touristPlan});
    return touristPlanCreate;
  }
}
