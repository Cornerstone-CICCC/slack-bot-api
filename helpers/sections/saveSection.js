const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveSection = async (sectionInfo) => {
  const newSection = await prisma.section.upsert({
    where: {
      classeId: sectionInfo.classeId,
    },
    update: sectionInfo,
    create: sectionInfo,
  });
  return newSection;
};

module.exports = { saveSection };
