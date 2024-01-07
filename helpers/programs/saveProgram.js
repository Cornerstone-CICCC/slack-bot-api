const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveProgram = async (programInfo) => {
  const newProgram = await prisma.program.upsert({
    where: {
      classeId: programInfo.classeId,
    },
    update: programInfo,
    create: programInfo,
  });
  return newProgram;
};

module.exports = { saveProgram };
