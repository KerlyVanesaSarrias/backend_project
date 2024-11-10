import { Request, Response } from "express";
import { TouristPlanService } from "../services/tourisPlan/touristPlan.service";
import { TouristPlanRepository } from "../repositories/touristPlan/touristPlan.repository";
import {
  CreateTouristPlanBody,
  TouristPlan,
} from "../interfaces/tourisPlan.interface";
import { AuthUser } from "../interfaces/user.interface";
import { CreateTouristPlan } from "../services/tourisPlan/touristPlan.service.interface";
import { ObjectId, Types } from "mongoose";
import { LocationService } from "../services/location/location.service";
import { LocationRepository } from "../repositories/location/location.repository";

const touristPlanRepo = new TouristPlanRepository();
const touristPlanService = new TouristPlanService(touristPlanRepo);

const locationRepo = new LocationRepository();
const locationService = new LocationService(locationRepo);

export class TouristPlanController {
  async getTouristPlan(req: Request, res: Response) {
    const touristPlanId = req.params.touristPlanId;
    const touristPlan = await touristPlanService.getTouristPlanById(
      touristPlanId
    );
    res.json(touristPlan);
  }

  async getTouristPlansList(req: Request, res: Response) {
    const touristPlans = await touristPlanService.getTouristPlansList();
    res.json(touristPlans);
  }

  async deleteTouristPlan(req: Request, res: Response) {
    const touristPlanId = res.locals.touristPlan as TouristPlan;
    await touristPlanService.deleteById(touristPlanId.id);
    res.status(200).json({
      message: "TouristPlan deleted successfully",
    });
  }

  async updateTouristPlan(req: Request, res: Response) {
    const userAuthenticated = res.locals.user as AuthUser;
    const touristPlanId = userAuthenticated.id;
    const touristPlan = req.body;
    const updatedTouristPlan = await touristPlanService.updateById(
      touristPlanId,
      touristPlan
    );
    res.json(updatedTouristPlan);
  }

  async createTouristPlan(req: Request, res: Response) {
    try {
      const { location, ...restCreateTouristProps } =
        req.body as CreateTouristPlanBody;

      const userAuthenticated = res.locals.user as AuthUser;

      const locationCreated = await locationService.createLocation(location);
      console.log('locationCreated:', locationCreated, userAuthenticated)
      if (!locationCreated) {
        res.status(400).json({ message: "Location not created" });
        return;
      }
      const createdTouristData: CreateTouristPlan = {
        ...restCreateTouristProps,
        coverImage: "default.png",
        createdBy: new Types.ObjectId(userAuthenticated.id),
        location: new Types.ObjectId(locationCreated?.id),
      };
      const createdTouristPlan = await touristPlanService.createTouristPlan(
        createdTouristData
      );
      if (createdTouristData) {
        res.status(201).json({
          status: "success",
          message: "TouristPlan created successfully",
          data: createdTouristPlan,
        });
      } else {
        res.status(400).json({ message: "Error creating TouristPlan" });
      }
    } catch (e) {
      console.error("create TouristPlan error:", e);
      if (e instanceof Error) {
        res.status(400).json({ message: e.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}
