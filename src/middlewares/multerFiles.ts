import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import {v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'touristPlans',
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],  
        public_id: (req: any, file: any) => 'cover-' + Date.now()
    } as any
});

export const uploads = multer({
    storage: storage,
    limits: { fileSize: 1 * 1024 * 1024 } // Limitar tamaño a 1 MB
});