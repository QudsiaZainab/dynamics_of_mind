// import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {
  findUserEmail,
  createUser,
  loginUserModel,
  findUserId,
} from "../../models/auth";
import { tokenCreator } from "../../services/tokenHandler";
import { Admin, LoginUser, User } from "../../types/auth";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findDoctorProfileById } from "../../models/doctorProfile";
import {
  createAdmin,
  findAdminEmail,
  findAdminId,
} from "../../models/admin/auth";

function isAdmin(obj: any): obj is Admin {
  return obj;
}

async function signup(req: Request, res: Response) {
  try {
    if (isAdmin(req.body)) {
      const admin = await findAdminEmail(req.body.email);
      if (admin) {
        res.status(400).json({ message: "Email already exist" });
      } else {
        await createAdmin(req.body);
        res.json({ message: "Signup Successfully" });
      }
    } else {
      res.status(403).send("not found");
    }
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .send({ err, message: "Error occured. Please try again later" });
  }
}

async function login(req: Request, res: Response) {
  try {
    if (isAdmin(req.body)) {
      const admin = await findAdminEmail(req.body.email);
      if (isAdmin(admin)) {
        bcrypt.compare(
          req.body.password,
          admin.password,
          async (err, result) => {
            if (result) {
              const token = await tokenCreator({
                id: admin.id,
                email: admin.email,
                userType:"admin"
              });
              res
                .cookie("token", token)
                .status(201)

                .json({
                  message: "Login Successfully",
                  token,
                });
            } else {
              res.status(403).json({ message: "Wrong credentials" });
            }
          }
        );
      } else {
        res.status(400).json({ message: "Wrong credentials" });
      }
    } else {
      res.status(403).send("Credentials not found");
    }
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .send({ err, message: "Error occured. Please try again later" });
  }
}

async function verify(req: Request, res: Response) {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token?.split(" ")[1];
      const JWT_SECRET = process.env.SECRET!;
      jwt.verify(token, JWT_SECRET, async (err, decode: any) => {
        if (err) {
          res.status(403).json({ message: "Error Occured" });
        } else {
          if (decode) {
            const adminObj = await findAdminId(decode.id);
            if (adminObj) {
              res.status(201).json({
                message: "Verified Successfully",
                id: adminObj?.id,
                name: adminObj?.name,
                email: adminObj?.email,
              });
            } else {
              res.status(403).json({ message: "Error Occured" });
            }
          }
        }
      });
    } else {
      res.status(403).json({ message: "Not Authenticated" });
    }
  } catch (err) {
    res
      .status(403)
      .send({ err, message: "Error occured. Please try again later" });
  }
}

export { signup, login, verify };
