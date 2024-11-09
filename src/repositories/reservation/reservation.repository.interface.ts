import { Reservation } from "../../interfaces/reservation.interface"

export interface IReservationRepository {
    findAll(): Promise<Reservation[]>
    findById(reservationId: string): Promise<Reservation | null>
    createReservation(reservation: Reservation): Promise<Reservation>
    updateById(reservationId: string, newReservation: Reservation): Promise<Reservation | null>
    deleteById(reservationId: string): Promise<Reservation | null>
}