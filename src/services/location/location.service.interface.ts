import { Location } from "../../interfaces/location.interface";

export interface ILocationService {
  getLocationList(): Promise<Location[]>;
  getLocationById(locationId: string): Promise<Location | null>;
  deleteById(locationId: string): Promise<Location | null>;
  updateById(locationId: string, newLocation: Location): Promise<Location | null>;
  createLocation(location: Location): Promise<Location | null>;
}
