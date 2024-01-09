const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveGrade = async (gradeInfo) => {
  const newGrade = await prisma.grade.upsert({
    where: {
      gradeId: gradeInfo.gradeId,
    },
    update: gradeInfo,
    create: gradeInfo,
  });
  return newGrade;
};

module.exports = { saveGrade };
