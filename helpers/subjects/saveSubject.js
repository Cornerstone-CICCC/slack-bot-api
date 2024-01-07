const saveSubject = async (subjectInfo) => {
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
