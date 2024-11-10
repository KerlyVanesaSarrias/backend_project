export interface Location {
  id: string;
  name: string;
  description: string;
  city: string;
  lat: number;
  lon: number;
  createdAt: Date;
}

export type City = {
  id: string;
  name: string;
  department: string;
  image: string;
};
