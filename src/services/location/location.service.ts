import { Location } from '../../interfaces/location.interface';
import { ILocationRepository } from "../../repositories/location/location.repository.interface";
import { ILocationService } from './location.service.interface';



export class LocationService implements ILocationService {
  private locationRepository: ILocationRepository;

  constructor(locationRepository: ILocationRepository) {
    this.locationRepository = locationRepository;
  }

  async getLocationList(): Promise<Location[]> {
    const locationList = await this.locationRepository.findAll();
    return locationList;
  }

  async getLocationById(locationId: string): Promise<Location | null> {
    const location = await this.locationRepository.findById(locationId);
    return location ;
  }

  async deleteById(locationId: string): Promise<Location | null> {
    const locationDelete = await this.locationRepository.deleteById(locationId);
    return locationDelete;
  }

  async updateById(locationId: string, newLocation: Location): Promise<Location | null> {
    const locationUpdate = await this.locationRepository.updateById(locationId, newLocation);
    return locationUpdate;
  }

  async createLocation(location: Location): Promise<Location | null> {
    const locationCreate = await this.locationRepository.createLocation({...location});
    return locationCreate;
  }
  
}
