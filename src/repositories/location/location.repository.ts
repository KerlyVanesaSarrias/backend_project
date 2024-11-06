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

}
