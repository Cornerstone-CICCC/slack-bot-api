const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const academics = require("../../data/academics.json");

async function main() {
  academics.forEach(async (program) => {
    const createdProgram = await prisma.program.create({
      data: {
        title: program.class_name,
        code: program.class_code,
        classeId: program.class_id,
      },
    });
    program.section.forEach(async (section) => {
      const createdSection = await prisma.section.create({
        data: {
          title: section.section_name,
          code: section.section_code,
          classeId: section.section_id,
          programId: createdProgram.id,
        },
      });
      section.subject.forEach(async (subject) => {
        await prisma.subject.create({
          data: {
            title: subject.subject_name,
            code: subject.subject_code,
            classeId: subject.subject_id,
            credits: +subject.subject_credit,
            sectionId: createdSection.id,
            type: subject.type,
          },
        });
      });
    });
  });
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
