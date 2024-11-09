import { Location } from "../../interfaces/location.interface";
import LocationModel from "../../models/location.model";
import { ILocationRepository } from "./location.repository.interface";

export class LocationRepository implements ILocationRepository {
  async findAll(): Promise<Location[]> {
    const locationsList = await LocationModel.find();
    return locationsList;
  }
  async findById(locationId: string): Promise<Location | null> {
    const location = await LocationModel.findById(locationId);
    return location;
  }
  
  async createLocation(location: Location): Promise<Location> {
    const locationCreate = await LocationModel.create(location)
    return locationCreate;
  }

  async updateById(locationId: string, newLocation: Location): Promise<Location | null> {
    const locationUpdate = await LocationModel.findByIdAndUpdate(locationId, newLocation, { new: true });
    return locationUpdate;
  }

  async deleteById(locationId: string): Promise<Location | null> {
    const locationDelete = await LocationModel.findOneAndDelete({id: locationId});
    return locationDelete;
  } 


}
