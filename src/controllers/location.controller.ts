import { Request, Response } from "express";
import { LocationService } from "../services/location/location.service";
import { LocationRepository } from "../repositories/location/location.repository";

const locationRepo = new LocationRepository();
const locationService = new LocationService(locationRepo);

export class LocationController {
  async getLocationList(req: Request, res: Response) {
    const locations = await locationService.getLocationList();
    res.json(locations);
  }

  async getLocationById(req: Request, res: Response) {
    const locationId = req.params.locationId;
    const location = await locationService.getLocationById(locationId);
    res.json(location);
  }
}
