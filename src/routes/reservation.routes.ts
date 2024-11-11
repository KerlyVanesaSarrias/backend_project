import { Router } from "express";
import { ReservationController } from '../controllers/reservation.controller';
import { ensureAuth } from "../middlewares/auth";
import { ROLES } from "../constants";
import { validate } from "../middlewares/validate.middlewarw";
import { createReservationSchema } from "../validations/reservation.validation";


const reservationController = new ReservationController();
const router = Router();

router.get("/", reservationController.getReservationsList)

router.post("/create", validate(createReservationSchema), ensureAuth([ROLES.CLIENT]), reservationController.createReservation)

export default router;