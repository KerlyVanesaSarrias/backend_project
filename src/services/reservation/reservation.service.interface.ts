import { Types } from 'mongoose';
import { Reservation } from '../../interfaces/reservation.interface';



export interface IReservationService {
    getReservationById(reservationId: string): Promise<Reservation | null>;
    getReservationsList(): Promise<Reservation[]>
    deleteById(reservationId: string): Promise<Reservation | null>;
    updateById(reservationId:string, newReservation: Reservation): Promise<Reservation | null>;
    createReservation(reservation: Reservation):  Promise<Reservation | null>;
}