const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveGrade = async (gradeInfo) => {
  const newGrade = await prisma.grade.upsert({
    where: {
      classeId: gradeInfo.classeId,
    },
    update: gradeInfo,
    create: gradeInfo,
  });
  return newGrade;
};

module.exports = { saveGrade };
