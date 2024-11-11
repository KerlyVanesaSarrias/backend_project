import { Types } from 'mongoose';
import { Reservation } from '../../interfaces/reservation.interface';

export interface IReservationService {
    getReservationsList(): Promise<Reservation[]>
    deleteById(reservationId: string): Promise<Reservation | null>;
    createReservation(reservation: Reservation, userId: string): Promise<Reservation | null>
}