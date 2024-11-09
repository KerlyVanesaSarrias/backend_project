import { Reservation } from "../../interfaces/reservation.interface";
import ReservationModel from "../../models/reservation.model";
import { IReservationRepository } from "./reservation.repository.interface";

export class ReservationRepository implements IReservationRepository {
  async findAll(): Promise<Reservation[]> {
    const reservationsList = await ReservationModel.find();
    return reservationsList;
  }
  async findById(reservationId: string): Promise<Reservation | null> {
    const reservation = await ReservationModel.findById(reservationId);
    return reservation;
  }

  async createReservation(reservation: Reservation): Promise<Reservation> {
    const reservationCreate = await ReservationModel.create(reservation);
    return reservationCreate;
  }

  async updateById(
    reservationId: string, newReservation: Reservation): Promise<Reservation | null> {
    const reservationUpdate = await ReservationModel.findByIdAndUpdate(
      reservationId,newReservation,
      { new: true }
    );
    return reservationUpdate;
  }

  async deleteById(reservationId: string): Promise<Reservation | null> {
    const reservationDelete = await ReservationModel.findOneAndDelete({
      id: reservationId,
    });
    return reservationDelete;
  }
}
