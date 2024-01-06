const { saveStudent } = require("../../helpers/student/saveStudent");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const sampleStudent = require("../../data/student-sample.json");

async function main() {
  await saveStudent(sampleStudent);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
