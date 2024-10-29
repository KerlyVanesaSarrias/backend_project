import { Location } from "../../interfaces/location.interface"

export interface ILocationService {
    getLocationList(): Promise<Location[]>
    getLocationById(id: string): Promise<Location | null>
    
}