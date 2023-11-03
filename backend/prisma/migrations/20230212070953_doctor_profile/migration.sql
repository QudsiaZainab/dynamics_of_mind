-- CreateTable
CREATE TABLE `Doctor_Profile` (
    `doctor_profile_id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `date_of_birth` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `languages` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `expertise` VARCHAR(191) NOT NULL,
    `experience` INTEGER NOT NULL,
    `resume` VARCHAR(191) NOT NULL,
    `status` ENUM('APPROVED', 'REJECTED', 'WAITING') NOT NULL,
    `paid` BOOLEAN NOT NULL,
    `amount` DOUBLE NOT NULL,
    `transaction` INTEGER NULL,
    `user` INTEGER NOT NULL,

    PRIMARY KEY (`doctor_profile_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
