

import { IReservationService } from "./reservation.service.interface";
import { Reservation } from '../../interfaces/reservation.interface';
import { IReservationRepository } from "../../repositories/reservation/reservation.repository.interface";

export class ReservationService implements IReservationService {
  private reservationRepository: IReservationRepository;

  constructor(reservationRepository: IReservationRepository) {
    this.reservationRepository = reservationRepository;
  }

  async getReservationsList(): Promise<Reservation[]> {
    const reservationsList = await this.reservationRepository.findAll();
    return reservationsList;
  }

  async getReservationById(reservationId: string): Promise<Reservation | null> {
    const reservation = await this.reservationRepository.findById(reservationId);
    return reservation;
  }

  async deleteById(reservationId: string): Promise<Reservation | null> {
    const reservationDelete = await this.reservationRepository.deleteById(reservationId);
    return reservationDelete;
  }

  async updateById(reservationId: string, newReservation: Reservation): Promise<Reservation | null> {
    const reservationUpdate = await this.reservationRepository.updateById(reservationId, newReservation);
    return reservationUpdate;
  }

  async createReservation(reservation: Reservation): Promise<Reservation | null> {
    const reservationCreate = await this.reservationRepository.createReservation({...reservation});
    return reservationCreate;
  }
}