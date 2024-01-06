const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getStudentFromDB = async (studentEmail) => {
  let studentFound = await prisma.student.findUnique({
    where: {
      email: studentEmail,
    },
  });
  return studentFound;
};

module.exports = { getStudentFromDB };
