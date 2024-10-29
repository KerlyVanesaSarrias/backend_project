import { Schema, model } from "mongoose";
import { Location } from "../interfaces/location.interface";

const locationSchema = new Schema<Location>({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "defaultCity.png",
    },
    department: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    lon: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
    
const LocationModel = model<Location>('Location', locationSchema)

export default LocationModel

