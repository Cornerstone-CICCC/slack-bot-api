const { PrismaClient } = require("@prisma/client");
const { saveAssessment } = require("../assessments/saveAssessment");
const { saveGrade } = require("./saveGrade");
const prisma = new PrismaClient();

const saveGrades = async (grades, studentId) => {
  grades.forEach(async (grade) => {
    const savedSubject = await prisma.subject.findUnique({
      where: {
        classeId: grade.subject.subject_id,
      },
    });
    grade.assessments.forEach(async (assessment) => {
      const assessmentInfo = {
        name: assessment.name,
        classeId: assessment.assessment_id,
        weight: assessment.weight,
        points: assessment.points,
        passingPoints: assessment.pass_points,
      };
      const savedAssessment = await saveAssessment(assessmentInfo);
      const gradeInfo = {
        studentId,
        score: assessment.score,
        subjectId: savedSubject.id,
        assessmentId: savedAssessment.id,
      };
      await saveGrade(gradeInfo);
    });
  });
};

module.exports = { saveGrades };
