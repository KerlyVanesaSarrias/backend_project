import { Location } from "../../interfaces/location.interface";
import LocationModel from "../../models/location.model";
import { ILocationRepository } from "./location.repository.interface";

export class LocationRepository implements ILocationRepository {
  async findAll(): Promise<Location[]> {
    const locationList = await LocationModel.find();
    return locationList;
  }
}
