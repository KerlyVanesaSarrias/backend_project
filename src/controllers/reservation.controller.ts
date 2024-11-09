import { Request, Response } from "express";
import { ReservationService } from "../services/reservation/reservation.service";
import { ReservationRepository } from "../repositories/reservation/reservation.repository";
import { Reservation,} from "../interfaces/reservation.interface";
import { AuthUser } from "../interfaces/user.interface";
import { CreateReservation } from '../services/reservation/reservation.service.interface';
import { ObjectId, Types } from "mongoose";
import { LocationService } from "../services/location/location.service";
import { LocationRepository } from "../repositories/location/location.repository";

const reservationRepo = new ReservationRepository();
const reservationService = new ReservationService(reservationRepo);

const locationRepo = new LocationRepository();
const locationService = new LocationService(locationRepo);

export class ReservationController {
  async getReservation(req: Request, res: Response) {
    const reservationId = req.params.reservationId;
    const reservation = await reservationService.getReservationById(
      reservationId
    );
    res.json(reservation);
  }

  async getReservationsList(req: Request, res: Response) {
    const reservations = await reservationService.getReservationsList();
    res.json(reservations);
  }

  async deleteReservation(req: Request, res: Response) {
    const reservationId = res.locals.reservation as Reservation;
    await reservationService.deleteById(reservationId.id);
    res.status(200).json({ 
      message: "Reservation deleted successfully"
    });
  }

  async updateReservation(req: Request, res: Response) {
    const userAuthenticated = res.locals.user as AuthUser;
    const reservationId = userAuthenticated.id;
    const reservation = req.body;
    const updatedReservation = await reservationService.updateById(
      reservationId,
      reservation
    );
    res.json(updatedReservation);
  }
  async createReservation(req: Request, res: Response): Promise<void> {
    try {
        const { userId, touristPlanId, checkIn, checkOut, status } = req.body;

        const newReservation: Reservation = {
          userId,
          touristPlanId,
          checkIn,
          checkOut,
          status,
          id:'',
        };

        const savedReservation = await ReservationService.CreateReservation(newReservation);
        res.status(201).json(savedReservation);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la reservación", error });
    }
};

}