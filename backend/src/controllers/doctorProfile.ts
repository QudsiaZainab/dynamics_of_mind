import { Request, Response } from "express";
import { createDoctorProfile, get, getAll, getDoctorStatus, update } from "../models/doctorProfile";

async function create(req: Request, res: Response) {
  try {
    const requiredFields = [
      "firstName",
      "lastName",
      "gender",
      "dateOfBirth",
      "country",
      "address",
      "city",
      "state",
      "zipCode",
      "languages",
      "title",
      "description",
      "expertise",
      "experience",
      "resume",
      "paid",
      "amount",
    ];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body)
    );

    if (missingFields.length) {
      return res.status(400).json({
        error: `Credentials not found`,
        missingFields,
      });
    }

    const doctorProfile = await createDoctorProfile({
      ...req.body,
      userId: req.user,
    });
    res
      .status(200)
      .json({ data: { ...doctorProfile }, message: "Created Doctor Profile" });
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .send({ err, message: "Error occured. Please try again later" });
  }
}

async function getStatus(req: Request, res: Response) {
  try {
    const status = await getDoctorStatus(req.user);
    res
      .status(200)
      .json(status);
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .send({ err, message: "Error occured. Please try again later" });
  }
}

async function getProfiles(req: Request, res: Response) {
  try {
    const profilesData = await getAll();
    res
      .status(200)
      .json(profilesData);
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .send({ err, message: "Error occured. Please try again later" });
  }
}
async function getSingleProfile(req: Request, res: Response) {
  try {
    if(req.user){
      const profilesData = await get(req.user);
      res
        .status(200)
        .json(profilesData);
    } else {
      res
        .status(401)
        .send({ message: "Error occured. Please try again later" });
    }
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .send({ err, message: "Error occured. Please try again later" });
  }
}

async function changeStatus(req: Request, res: Response) {
  try {
    const updateProfile = await update({
      status:req.body.status,
      userId:req.body.userId
    });
    res
      .status(200)
      .json({data: updateProfile});
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .send({ err, message: "Error occured. Please try again later" });
  }
}


export { create,getStatus,getProfiles,changeStatus,getSingleProfile };
