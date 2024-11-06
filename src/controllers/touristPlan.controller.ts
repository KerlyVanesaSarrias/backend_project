import { Request, Response } from "express";
import { TouristPlanService } from "../services/tourisPlan/touristPlan.service";
import { TouristPlanRepository } from "../repositories/touristPlan/touristPlan.repository";
import { TouristPlan } from "../interfaces/tourisPlan.interface";

const touristPlanRepo = new TouristPlanRepository();
const touristPlanService = new TouristPlanService(touristPlanRepo);

export class TouristPlanController {
  
  async getTouristPlan(req: Request, res: Response) {
    const touristPlanId = req.params.touristPlanId;
    const touristPlan = await touristPlanService.getTouristPlanById(touristPlanId);
    res.json(touristPlan);
  }

  async getTouristPlansList(req: Request, res: Response) {
    const touristPlans = await touristPlanService.getTouristPlansList();
    res.json(touristPlans);
  }

  async deleteTouristPlan(req: Request, res: Response) {
    const touristPlanId = res.locals.touristPlan as TouristPlan;
    await touristPlanService.deleteById(touristPlanId.id);
    res.json({ message: "TouristPlan deleted successfully" });
  }

  async updateTouristPlan(req: Request, res: Response) {
    const touristPlanToken = res.locals.touristPlan as TouristPlan;
    const touristPlanId = touristPlanToken.id;
    const touristPlan = req.body;
    const updatedTouristPlan = await touristPlanService.updateById(touristPlanId, touristPlan);
    res.json(updatedTouristPlan);
    }

  async createTouristPlan(req: Request, res: Response) {
    try {
      const touristPlan = req.body;
      const createdTouristPlan = await touristPlanService.createTouristPlan(touristPlan);
       res.status(201).json(createdTouristPlan);
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
