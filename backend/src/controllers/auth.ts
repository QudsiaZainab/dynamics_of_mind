// import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {
  findUserEmail,
  createUser,
  loginUserModel,
  findUserId,
} from "../models/auth";
import { tokenCreator } from "../services/tokenHandler";
import { LoginUser, User } from "../types/auth";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findDoctorProfileById } from "../models/doctorProfile";

function isUser(obj: any): obj is User {
  return obj;
}
function isLoginUser(obj: any): obj is LoginUser {
  return obj;
}
async function signup(req: Request, res: Response) {
  try {
    if (isUser(req.body)) {
      const user = await findUserEmail(req.body.email);
      if (user) {
        res.status(400).json({ message: "Email already exist" });
      } else {
        await createUser(req.body);
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
    if (isLoginUser(req.body)) {
      const user = await loginUserModel(req.body);
      if (isUser(user)) {
        bcrypt.compare(
          req.body.password,
          user.password,
          async (err, result) => {
            if (result) {
              
              const token = await tokenCreator({
                id: user.user_id,
                userType:"user",
                email:user.email
              });
              res
                .cookie("token", token)
                .status(201)

                .json({
                  message: "Login Successfully",
                  token,
                  role: user.role.toLowerCase(),
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
          res.send(403).json({ message: err.message });
        } else {
          if (decode) {
            const userObj = await findUserId(decode.id);
            if(userObj){
              if(userObj.role === "STUDENT" || userObj.role === "PATIENT"){
                res.status(201).json({
                  message: "Verified Successfully",
                  id: userObj?.user_id,
                  name: userObj?.name,
                  email: userObj?.email,
                  role: userObj?.role,
                });
              } else {
                const userProfile = await findDoctorProfileById(userObj.user_id);
                if(userProfile){
                  res.status(201).json({
                    message: "Verified Successfully",
                    id: userObj?.user_id,
                    name: userObj?.name,
                    email: userObj?.email,
                    role: userObj?.role,
                    status: userProfile.status
                  });
                } else {
                  res.status(201).json({
                    message: "Verified Successfully",
                    id: userObj?.user_id,
                    name: userObj?.name,
                    email: userObj?.email,
                    role: userObj?.role,
                    status: null
                  });
                }
              }
            } else {
              res.status(403).json({message:"Error Occured"})
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
