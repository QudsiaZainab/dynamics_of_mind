import { PrismaClient } from "@prisma/client";
import { DoctorProfile, StatusOfProfile } from "../types/doctorProfile";

const prisma = new PrismaClient();

export const findDoctorProfileById = async (id: string) => {
  const userProfile = await prisma.doctor_Profile.findFirst({
    where: {
      user_data: id,
    },
  });
  return userProfile;
};

export const createDoctorProfile = async (data: DoctorProfile) => {
  const newUser = await prisma.doctor_Profile.create({
    data: {
      first_name: data.firstName,
      last_name: data.lastName,
      gender: data.gender,
      date_of_birth: data.dateOfBirth,
      country: data.country,
      address: data.address,
      city: data.city,
      state: data.state,
      zip_code: data.zipCode,
      languages: data.languages,
      title: data.title,
      description: data.description,
      expertise: data.expertise,
      experience: data.experience,
      resume: data.resume,
      status: "WAITING",
      paid: data.paid,
      amount: data.amount,
      user_data: data.userId,
    },
  });
  return newUser;
};

export const getDoctorStatus = async (userId:string | undefined) => {
  const status = await prisma.doctor_Profile.findFirst({
    where:{
      user_data:userId
    },
    select:{
      status:true
    }
  });
  return status;
};

export const getAll = async () => {
  const profilesData = await prisma.doctor_Profile.findMany();
  return profilesData;
};

export const get = async (userId:string) => {
  const profilesData = await prisma.doctor_Profile.findFirst({
    where:{
      user_data:userId
    }
  });
  return profilesData;
};

// export const updateStatus = async (status:"WAITING"| "APPROVED" | "REJECTED") => {
//   const updatedProfile = await prisma.doctor_Profile.update({
//     where:{
//       user_data:id
//     },
//     data:{
//       status:status
//     }
//   });
//   return updatedProfile;
// };



export const update = async (data: Partial<DoctorProfile>) => {
  //Note that the Partial<DoctorProfile> type is used to allow specifying only a subset of keys from MyInterface for updating. This way, you can update one or more keys without having to provide values for all keys in data.
  // const selectedKeys = Object.keys(data);

  // const obj: Omit<DoctorProfile> = {
  //   first_name: data.firstName,
  //   last_name: data.lastName,
  //   gender: data.gender,
  //   date_of_birth: data.dateOfBirth,
  //   country: data.country,
  //   address: data.address,
  //   city: data.city,
  //   state: data.state,
  //   zip_code: data.zipCode,
  //   languages: data.languages,
  //   title: data.title,
  //   description: data.description,
  //   expertise: data.expertise,
  //   experience: data.experience,
  //   resume: data.resume,
  //   status: data.status,
  //   paid: data.paid,
  //   amount: data.amount,
  //   user_data: data.userId,
  // };

  // for (const key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     if (!selectedKeys.includes(key)) {
  //       delete obj[key];
  //     } else {
  //       obj[key as keyof DoctorProfile] = data[key as keyof DoctorProfile]; // Assign value from data to obj
  //     }
  //   }
  // }

  const updatedProfile = await prisma.doctor_Profile.update({
    where: {
      user_data: data.userId,
    },
    data: {
      first_name: data.firstName,
    last_name: data.lastName,
    gender: data.gender,
    date_of_birth: data.dateOfBirth,
    country: data.country,
    address: data.address,
    city: data.city,
    state: data.state,
    zip_code: data.zipCode,
    languages: data.languages,
    title: data.title,
    description: data.description,
    expertise: data.expertise,
    experience: data.experience,
    status:data.status,
    resume: data.resume,
    paid: data.paid,
    amount: data.amount,
    },
  });

  return updatedProfile;
};
