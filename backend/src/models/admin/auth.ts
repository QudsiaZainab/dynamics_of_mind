import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Admin, LoginUser } from "../../types/auth";

const prisma = new PrismaClient();

export const findAdminEmail = async (email: string) => {
  const admin = await prisma.admin.findUnique({
    where: {
      email,
    },
  });
  return admin;
};
export const findAdminId = async (id: string) => {
  const admin = await prisma.admin.findUnique({
    where: {
      id,
    },
  });
  return admin;
};

export const createAdmin = async (newAdminData: Admin) => {
  const password = bcrypt.hashSync(newAdminData.password, 10);

  const newAdmin = await prisma.admin.create({
    data: {
      name: newAdminData.name || "Admin",
      email: newAdminData.email,
      password: password,
    },
  });
  return newAdmin;
};
export const loginUserModel = async (data: LoginUser) => {
  const newUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  return newUser;
};
