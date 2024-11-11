

import { IReservationService } from "./reservation.service.interface";
import { Reservation } from '../../interfaces/reservation.interface';
import { IReservationRepository } from "../../repositories/reservation/reservation.repository.interface";
import UserModel from "../../models/user.model";
import { User } from "../../interfaces/user.interface";

export class ReservationService implements IReservationService {
  private reservationRepository: IReservationRepository;

  constructor(reservationRepository: IReservationRepository) {
    this.reservationRepository = reservationRepository;
  }

  async getReservationsList(): Promise<Reservation[]> {
    const reservationsList = await this.reservationRepository.findAll();
    return reservationsList;
  }

  async deleteById(reservationId: string): Promise<Reservation | null> {
    const reservationDelete = await this.reservationRepository.deleteById(reservationId);
    return reservationDelete;
  }

  async createReservation(reservation: Reservation): Promise<Reservation | null> {
    const touristPlanCreate = await this.reservationRepository.createReservation({...reservation});
    return touristPlanCreate;
  }
}