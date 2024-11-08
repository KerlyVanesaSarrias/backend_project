import { Types } from "mongoose";
export interface Location {
  id: string;
  name: string;
  description: string;
  city: City;
  lat: number;
  lon: number;
  createdAt: Date;
}

export interface City {
  id: string;
  name: string;
  department: string;
  image: string;
};
