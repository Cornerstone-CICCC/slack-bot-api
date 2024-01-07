/*
  Warnings:

  - You are about to drop the column `classeProgramId` on the `SubjectEnrollment` table. All the data in the column will be lost.
  - You are about to drop the column `classeSectionId` on the `SubjectEnrollment` table. All the data in the column will be lost.
  - You are about to drop the column `programId` on the `SubjectEnrollment` table. All the data in the column will be lost.
  - You are about to drop the column `sectionId` on the `SubjectEnrollment` table. All the data in the column will be lost.
  - Made the column `classeId` on table `Subject` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "SubjectEnrollment" DROP CONSTRAINT "SubjectEnrollment_programId_fkey";

-- DropForeignKey
ALTER TABLE "SubjectEnrollment" DROP CONSTRAINT "SubjectEnrollment_sectionId_fkey";

-- AlterTable
ALTER TABLE "Subject" ALTER COLUMN "classeId" SET NOT NULL;

-- AlterTable
ALTER TABLE "SubjectEnrollment" DROP COLUMN "classeProgramId",
DROP COLUMN "classeSectionId",
DROP COLUMN "programId",
DROP COLUMN "sectionId";
