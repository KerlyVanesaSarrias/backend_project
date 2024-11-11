import { Reservation } from "../../interfaces/reservation.interface"

export interface IReservationRepository {
    findAll(): Promise<Reservation[]>
    createReservation(reservation: Reservation): Promise<Reservation | null>
    deleteById(reservationId: string): Promise<Reservation | null>
}