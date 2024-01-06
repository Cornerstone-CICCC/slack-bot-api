/*
  Warnings:

  - You are about to drop the column `classeProgramEnrollmentId` on the `SubjectEnrollment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[classeId]` on the table `SectionEnrollment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `classeSectionEnrollmentId` to the `SubjectEnrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sectionEnrollmentId` to the `SubjectEnrollment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubjectEnrollment" DROP COLUMN "classeProgramEnrollmentId",
ADD COLUMN     "classeSectionEnrollmentId" INTEGER NOT NULL,
ADD COLUMN     "sectionEnrollmentId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SectionEnrollment_classeId_key" ON "SectionEnrollment"("classeId");

-- AddForeignKey
ALTER TABLE "SubjectEnrollment" ADD CONSTRAINT "SubjectEnrollment_sectionEnrollmentId_fkey" FOREIGN KEY ("sectionEnrollmentId") REFERENCES "SectionEnrollment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
