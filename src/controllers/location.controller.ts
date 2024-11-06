import { Request, Response } from "express";
import { LocationService } from "../services/location/location.service";
import { LocationRepository } from "../repositories/location/location.repository";
import { Location } from "../interfaces/location.interface";
import { AuthUser } from "../interfaces/user.interface";

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

  async deleteLocation(req: Request, res: Response) {
    const locationId = res.locals.location as Location;
    await locationService.deleteById(locationId.id);
    res.json({ message: "Location deleted successfully" });
  }

  async updateLocation(req: Request, res: Response) {
    const userAuthenticated = res.locals.user as AuthUser;
    const locationId = userAuthenticated.id;
    const location = req.body;
    const updatedLocation = await locationService.updateById(locationId, location);
    res.json(updatedLocation);
    }

    async createLocation(req: Request, res: Response) {
      try {
        const location = req.body;
        const createdLocation = await locationService.createLocation(location);
        if (createdLocation) {
          res.status(201).json(createdLocation);
        } else {
          res.status(400).json({ message: "create location error" });
        }
      } catch (e) {
        console.error("createLocation error:", e);
        if (e instanceof Error) {
          res.status(400).json({ message: e.message });
        } else {
          res.status(500).json({ message: "Internal Server Error" });
        }
      }
    }
}

