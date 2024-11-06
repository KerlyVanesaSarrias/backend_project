import { Types } from "mongoose";
export interface Location {
  id: string;
  name: string;
  image: string;
  city: City;
  lat: number;
  lon: number;
  createdAt: Date;
}

export interface City {
  id: string;
  name: string;
  image: string;
};
