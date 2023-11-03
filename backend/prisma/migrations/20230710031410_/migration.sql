/*
  Warnings:

  - A unique constraint covering the columns `[user_data]` on the table `Doctor_Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Doctor_Profile_user_data_key` ON `Doctor_Profile`(`user_data`);
