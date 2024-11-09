import { Schema, Types, model } from "mongoose";
import { Reservation } from "../interfaces/reservation.interface";


const reservationSchema = new Schema<Reservation>({
    userId: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    touristPlanId: {
        type: Types.ObjectId,
        ref: "TouristPlan",
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
    
const ReservationModel = model<Reservation>('Reservation', reservationSchema)

export default ReservationModel

