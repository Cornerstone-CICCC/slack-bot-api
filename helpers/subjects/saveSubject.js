const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveSubject = async (subjectInfo) => {
  console.log("subjectInfo", subjectInfo.title);
  const newSubject = await prisma.subject.upsert({
    where: {
      classeId: subjectInfo.classeId,
    },
    update: subjectInfo,
    create: subjectInfo,
  });
  return newSubject;
};

module.exports = { saveSubject };
