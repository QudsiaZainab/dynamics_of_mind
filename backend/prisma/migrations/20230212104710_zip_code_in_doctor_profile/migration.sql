/*
  Warnings:

  - You are about to drop the column `user` on the `doctor_profile` table. All the data in the column will be lost.
  - Added the required column `userUser_id` to the `Doctor_Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip_code` to the `Doctor_Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `doctor_profile` DROP COLUMN `user`,
    ADD COLUMN `userUser_id` INTEGER NOT NULL,
    ADD COLUMN `zip_code` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Doctor_Profile` ADD CONSTRAINT `Doctor_Profile_userUser_id_fkey` FOREIGN KEY (`userUser_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
