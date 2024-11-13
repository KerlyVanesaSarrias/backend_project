import { Request, Response } from "express";
import { TouristPlanService } from "../services/tourisPlan/touristPlan.service";
import { TouristPlanRepository } from "../repositories/touristPlan/touristPlan.repository";
import {
  CreateTouristPlanBody,
  TouristPlan,
} from "../interfaces/tourisPlan.interface";
import { AuthUser } from "../interfaces/user.interface";
import { CreateTouristPlan } from "../services/tourisPlan/touristPlan.service.interface";
import { Types } from "mongoose";
import { LocationService } from "../services/location/location.service";
import { LocationRepository } from "../repositories/location/location.repository";
import TouristPlanModel from "../models/touristPlan.model";

const touristPlanRepo = new TouristPlanRepository();
const touristPlanService = new TouristPlanService(touristPlanRepo);

const locationRepo = new LocationRepository();
const locationService = new LocationService(locationRepo);

export class TouristPlanController {

  async getTouristPlan(req: Request, res: Response) {
    const touristPlanId = req.params.touristPlanId;
    const touristPlan = await touristPlanService.getTouristPlanById(touristPlanId);
    if (!touristPlan) {
      res.status(404).json({ message: 'Tourist plan not found' });
      return;
    }
    res.json(touristPlan);
  }

  async getTouristPlansList(req: Request, res: Response) {
    const cityId = req.query.cityId;
    const touristPlans = await touristPlanService.getTouristPlansList(cityId?.toString());
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
    try {
      const { id } = req.params;
      const updateData = req.body as Partial<CreateTouristPlan>;
  
      const updatedTouristPlan = await touristPlanService.updateById(id, updateData);
  
      if (!updatedTouristPlan) {
        res.status(404).json({ message: 'Tourist Plan not found' });
        return;
      }
  
      res.status(200).json({
        status: 'success',
        message: 'Tourist Plan updated successfully',
        data: updatedTouristPlan,
      });
    } catch (error) {
      console.error('update Tourist Plan error:', error);
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  }
  

  async createTouristPlan(req: Request, res: Response) {
    try {
      const { location, ...restCreateTouristProps } =
        req.body as CreateTouristPlanBody;

      const userAuthenticated = res.locals.user as AuthUser;

      const locationCreated = await locationService.createLocation(location);

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
        createdTouristData, userAuthenticated.id);
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

async updateCoverImage(req: Request, res: Response) {
  const { touristPlanId } = req.params;
  console.log('file', req.file)
  const file = req.file?.path;

  if (!file) {
      res.status(400).json({ message: "No image was provided." });
      return;
  }

  try {
    const touristPlanUpdated = await touristPlanService.updateById(touristPlanId, {coverImage: file});

      if (!touristPlanUpdated) {
          res.status(404).json({ message: "Plan turist not found" });
          return;
      }

      res.status(200).json(touristPlanUpdated);
  } catch (error) {
      res.status(500).json({ message: "Error al actualizar la imagen", error });
  }
};

async updateImages(req: Request, res: Response) {
  const { touristPlanId } = req.params;
  const files = req.files as Express.Multer.File[];

  if (!files || files.length === 0) {
      res.status(400).json({ message: "No image was provided." });
      return;
  }
  const imagePaths = files.map((file: any) => file.path);
  try {
    const touristPlanUpdated = await touristPlanService.updateById(touristPlanId, {images: imagePaths});

      if (!touristPlanUpdated) {
          res.status(404).json({ message: "Plan turist not found" });
          return;
      }

      res.status(200).json(touristPlanUpdated);
  } catch (error) {
      res.status(500).json({ message: "Error update image", error });
  }
};


}

