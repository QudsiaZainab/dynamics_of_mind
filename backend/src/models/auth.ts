import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { LoginUser, User } from "../types/auth";

const prisma = new PrismaClient();

export const findUserEmail = async (email:string)=>{
  const user = await prisma.user.findUnique({
    where:{
      email
    }
  });
  return user;
}
export const findUserId = async (id:string)=>{
  const user = await prisma.user.findUnique({
    where:{
      user_id:id
    }
  });
  return user;
}

export const createUser = async (newUserData: User) => {
  const password = bcrypt.hashSync(newUserData.password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: newUserData.name,
      email: newUserData.email,
      password: password,
      role: newUserData.role,
    },
  });
  return newUser;
};
export const loginUserModel = async (data: LoginUser) => {
  const newUser = await prisma.user.findUnique({
    where: {
      email: data.email
    },
  });
  return newUser;
};

// export const loginUser = async (data:)