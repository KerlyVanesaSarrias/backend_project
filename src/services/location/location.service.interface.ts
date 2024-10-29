import { Location } from "../../interfaces/location.interface"

export interface ILocationService {
    getLocationList(): Promise<Location[]>
    
}