import {Request} from "express";
export type Role = "STUDENT" | "TEACHER" | "PATIENT" | "DOCTOR";

export interface User {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface LoginUser {
  email:string;
  password: string;
}

export interface Admin {
  name?:string;
  email:string;
  password:string;
}