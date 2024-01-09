/*
  Warnings:

  - A unique constraint covering the columns `[gradeId]` on the table `Grade` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gradeId` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grade" ADD COLUMN     "gradeId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Grade_gradeId_key" ON "Grade"("gradeId");
