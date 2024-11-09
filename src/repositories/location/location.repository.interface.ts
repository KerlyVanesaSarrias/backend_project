import { Location } from '../../interfaces/location.interface';


export interface ILocationRepository {
    findAll(): Promise<Location[]>
    findById(locationId: string): Promise<Location | null>
    createLocation(location: Location): Promise<Location>
    updateById(locationId: string, newLocation: Location): Promise<Location | null>
    deleteById(locationId: string): Promise<Location | null>
}