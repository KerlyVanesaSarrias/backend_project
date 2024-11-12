import { Request, Response } from "express";
import { ReservationService } from "../services/reservation/reservation.service";
import { ReservationRepository } from "../repositories/reservation/reservation.repository";
import {
  CreateReservationBody,
  Reservation,
} from "../interfaces/reservation.interface";
import { AuthUser, User } from "../interfaces/user.interface";
import { LocationService } from "../services/location/location.service";
import { LocationRepository } from "../repositories/location/location.repository";
import { TouristPlan } from "../interfaces/tourisPlan.interface";
import { Types } from "mongoose";

const reservationRepo = new ReservationRepository();
const reservationService = new ReservationService(reservationRepo);

const locationRepo = new LocationRepository();
const locationService = new LocationService(locationRepo);

export class ReservationController {
  async getReservationsByUser(req: Request, res: Response) {
    const userAuthenticated = res.locals.user as AuthUser;
    console.log('userAuthenticated: ', userAuthenticated)
    const reservations = await reservationService.getReservationsByUser(userAuthenticated.id);
    res.json(reservations);
  }

  async createReservation(req: Request, res: Response): Promise<void> {
    try {
      const userAuthenticated = res.locals.user as AuthUser;
      const { touristPlanId, checkIn, checkOut } =
        req.body as CreateReservationBody;

      const reservation: Reservation = {
        user: new Types.ObjectId(userAuthenticated.id),
        touristPlan: new Types.ObjectId(touristPlanId),
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
      };

      const createdReservation = await reservationService.createReservation(
        reservation
      );

      res.status(201).json({
        status: "success",
        message: "Reservation created successfully",
        data: createdReservation,
      });
    } catch (error) {
      console.error("createReservation error:", error);
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}
