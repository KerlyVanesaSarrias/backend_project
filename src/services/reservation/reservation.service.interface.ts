import { Types } from 'mongoose';
import { Reservation } from '../../interfaces/reservation.interface';


export interface CreateReservation {
    id?: string;
    userId: Types.ObjectId; 
    touristPlanId: Types.ObjectId;
    checkIn: Date;
    checkOut: Date;
    status: boolean; 
    createdAt: Date; 
}
export interface IReservationService {
    getReservationById(reservationId: string): Promise<Reservation | null>;
    getReservationsList(): Promise<Reservation[]>
    deleteById(reservationId: string): Promise<Reservation | null>;
    updateById(reservationId:string, newReservation: Reservation): Promise<Reservation | null>;
    createReservation(reservation: CreateReservation):  Promise<Reservation | null>;
}