import { Types } from 'mongoose';
import { Reservation } from '../../interfaces/reservation.interface';

export interface IReservationService {
    getReservationsByUser(userId: string): Promise<Reservation[]>
    deleteById(reservationId: string): Promise<Reservation | null>;
    createReservation(reservation: Reservation, userId: string): Promise<Reservation | null>
    getReservationsByAdmin(userId: string): Promise<Reservation[]> 
}