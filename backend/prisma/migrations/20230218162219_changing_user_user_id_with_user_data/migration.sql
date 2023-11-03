/*
  Warnings:

  - You are about to drop the column `userUser_id` on the `doctor_profile` table. All the data in the column will be lost.
  - Added the required column `user_data` to the `Doctor_Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `doctor_profile` DROP FOREIGN KEY `Doctor_Profile_userUser_id_fkey`;

-- AlterTable
ALTER TABLE `doctor_profile` DROP COLUMN `userUser_id`,
    ADD COLUMN `user_data` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Doctor_Profile` ADD CONSTRAINT `Doctor_Profile_user_data_fkey` FOREIGN KEY (`user_data`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
