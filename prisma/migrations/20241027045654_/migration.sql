/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `SentData` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "organization" TEXT NOT NULL DEFAULT 'none',
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "surName" TEXT NOT NULL;

-- DropTable
DROP TABLE "SentData";

-- CreateTable
CREATE TABLE "HourMUMG" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "OstrPres" DECIMAL(3,2) NOT NULL,
    "OstrValue" DECIMAL(4,2) NOT NULL,

    CONSTRAINT "HourMUMG_pkey" PRIMARY KEY ("id")
);
