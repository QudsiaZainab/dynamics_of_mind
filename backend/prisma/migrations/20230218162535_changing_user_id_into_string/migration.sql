/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `doctor_profile` DROP FOREIGN KEY `Doctor_Profile_user_data_fkey`;

-- AlterTable
ALTER TABLE `doctor_profile` MODIFY `user_data` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- AddForeignKey
ALTER TABLE `Doctor_Profile` ADD CONSTRAINT `Doctor_Profile_user_data_fkey` FOREIGN KEY (`user_data`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
