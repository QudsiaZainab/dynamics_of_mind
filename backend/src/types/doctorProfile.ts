export enum StatusOfProfile {
  APPROVED = "APPROVED",
  REJECTED = "REJECTED", 
  WAITING = "WAITING",
}
export interface DoctorProfile {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipCode:number;
  languages: string;
  title: string;
  description: string;
  expertise: string;
  experience: number;
  resume: string;
  status: StatusOfProfile;
  paid: boolean;
  amount: number;
  transaction?: number;
  userId: string;
}
