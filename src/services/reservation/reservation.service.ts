

import { IReservationService } from "./reservation.service.interface";
import { Reservation } from '../../interfaces/reservation.interface';
import { IReservationRepository } from "../../repositories/reservation/reservation.repository.interface";
import ReservationModel from "../../models/reservation.model";
import TouristPlanModel from "../../models/touristPlan.model";
import { Types } from "mongoose";

export class ReservationService implements IReservationService {
  private reservationRepository: IReservationRepository;

  constructor(reservationRepository: IReservationRepository) {
    this.reservationRepository = reservationRepository;
  }

  async getReservationsByUser(userId: string): Promise<Reservation[]> {
    const reservationsList = await ReservationModel.find({ user: userId })
    .populate('touristPlan')
    .populate({
      path: 'user',
      select: '-password -roles'
    })
    .lean();

    return reservationsList;
  }

  async getReservationsByAdmin(userId: string): Promise<Reservation[]> {
    const touristPlans = await TouristPlanModel.find({ createdBy: userId }).lean();
    const touristPlanIds = touristPlans.map(plan => plan._id);
    const reservations = await ReservationModel.find({
      touristPlan: { $in: touristPlanIds }
    })
      .populate('touristPlan')
      .populate({
        path: 'user',
        select: '-password -roles',
      })
      .lean();
      return reservations;
  }

  async deleteById(reservationId: string): Promise<Reservation | null> {
    const reservationDelete = await this.reservationRepository.deleteById(reservationId);
    return reservationDelete;
  }

  async createReservation(reservation: Reservation): Promise<Reservation | null> {
    const touristPlan = await TouristPlanModel.findById(reservation.touristPlan);
    if(!touristPlan) {
      throw new Error('Tourist plan not found');
    }

    const userReservationId = reservation.user as Types.ObjectId;
    if(userReservationId.toString() === touristPlan.createdBy.toString()){
      throw new Error('You cannot book at your own establishment')
    }
    
    const touristPlanCreate = await this.reservationRepository.createReservation({...reservation});
    return touristPlanCreate;
  }
}