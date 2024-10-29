import { Location } from '../../interfaces/location.interface';
import { ILocationRepository } from "../../repositories/location/location.repository.interface";
import { ILocationService } from './location.service.interface';



export class LocationService implements ILocationService {
  private locationRepository: ILocationRepository;

  constructor(locationRepository: ILocationRepository) {
    this.locationRepository = locationRepository;
  }

  async getLocationList(): Promise<Location[]> {
    const usersList = await this.locationRepository.findAll();
    return usersList;
  }

  async getLocationById(locationId: string): Promise<Location | null> {
    const location = await this.locationRepository.findById(locationId);
    return location ;
  }
  
}
