/*
  Warnings:

  - A unique constraint covering the columns `[classeId]` on the table `Program` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[classeId]` on the table `Section` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[classeId]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT,
    "dob" TIMESTAMP(3),
    "address" TEXT,
    "zipCode" TEXT,
    "contact" TEXT,
    "advisorName" TEXT,
    "citizenship" TEXT,
    "sinNumber" TEXT,
    "studentPermitDate" TIMESTAMP(3),
    "workPermitDate" TIMESTAMP(3),
    "classeId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "status" TEXT DEFAULT 'active',
    "enrolledProgram" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubjectEnrollment" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "classeSubjectId" INTEGER NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "classeSectionId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,
    "classeProgramId" INTEGER NOT NULL,
    "classeProgramEnrollmentId" INTEGER NOT NULL,
    "status" TEXT DEFAULT 'Not Set',

    CONSTRAINT "SubjectEnrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SectionEnrollment" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "classeSectionId" INTEGER NOT NULL,
    "classeId" INTEGER NOT NULL,
    "status" TEXT DEFAULT 'Not Set',

    CONSTRAINT "SectionEnrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grade" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "assessmentId" INTEGER NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assessment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "classeId" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "passingPoints" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_classeId_key" ON "Student"("classeId");

-- CreateIndex
CREATE UNIQUE INDEX "Assessment_classeId_key" ON "Assessment"("classeId");

-- CreateIndex
CREATE UNIQUE INDEX "Program_classeId_key" ON "Program"("classeId");

-- CreateIndex
CREATE UNIQUE INDEX "Section_classeId_key" ON "Section"("classeId");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_classeId_key" ON "Subject"("classeId");

-- AddForeignKey
ALTER TABLE "SubjectEnrollment" ADD CONSTRAINT "SubjectEnrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectEnrollment" ADD CONSTRAINT "SubjectEnrollment_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectEnrollment" ADD CONSTRAINT "SubjectEnrollment_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectEnrollment" ADD CONSTRAINT "SubjectEnrollment_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionEnrollment" ADD CONSTRAINT "SectionEnrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionEnrollment" ADD CONSTRAINT "SectionEnrollment_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "Assessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
