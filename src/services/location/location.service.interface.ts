import { City, Location } from "../../interfaces/location.interface";

export interface CreateLocation {
  id: string;
  name: string;
  image: string;
  city: City;
  lat: number;
  lon: number;
  createdAt: Date;
}
export interface ILocationService {
  getLocationList(): Promise<Location[]>;
  getLocationById(id: string): Promise<Location | null>;
  deleteById(locationId: string): Promise<Location | null>;
  updateById(locationId: string, newLocation: Location): Promise<Location | null>;
  createLocation(location: CreateLocation): Promise<Location | null>;
}
