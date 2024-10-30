import { Schema, model } from "mongoose";
import { TouristPlan } from "../interfaces/tourisPlan.interface";


const touristPlanSchema = new Schema<TouristPlan>({
    locationId: {
        type: Schema.ObjectId,
        ref: "Location",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    created_by: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now

    }
});
    
const TouristPlanModel = model<TouristPlan>('TouristPlan', touristPlanSchema)

export default TouristPlanModel

