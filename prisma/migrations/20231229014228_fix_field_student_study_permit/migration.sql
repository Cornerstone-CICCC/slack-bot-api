/*
  Warnings:

  - You are about to drop the column `studentPermitDate` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "studentPermitDate",
ADD COLUMN     "studyPermitDate" TIMESTAMP(3);
