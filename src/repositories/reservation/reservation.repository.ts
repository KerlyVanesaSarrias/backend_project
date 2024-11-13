import { Reservation } from "../../interfaces/reservation.interface";
import ReservationModel from "../../models/reservation.model";
import { IReservationRepository } from "./reservation.repository.interface";

export class ReservationRepository implements IReservationRepository {
  async findAll(): Promise<Reservation[]> {
    const reservationsList = await ReservationModel.find();
    return reservationsList;
  }
  async createReservation(reservation: Reservation): Promise<Reservation> {
    const reservationCreate = await ReservationModel.create(reservation);
    return reservationCreate;
  }

  async deleteById(reservationId: string): Promise<Reservation | null> {
    const reservationDelete = await ReservationModel.findOneAndDelete({
      id: reservationId,
    });
    return reservationDelete;
  }
}
