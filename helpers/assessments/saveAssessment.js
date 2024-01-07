const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveAssessment = async (assessmentInfo) => {
  const newAssessment = await prisma.assessment.upsert({
    where: {
      classeId: assessmentInfo.classeId,
    },
    update: assessmentInfo,
    create: assessmentInfo,
  });
  return newAssessment;
};

module.exports = { saveAssessment };
