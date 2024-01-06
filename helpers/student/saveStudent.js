const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveStudent = async (student) => {
  const {
    first_name: firstName,
    last_name: lastName,
    student_email: email,
    gender,
    student_dob: dob,
    address,
    zipcode: zipCode,
    student_contact: contact,
    text_89: citizenship,
    text_143: sinNumber,
    admission_number,
    textarea_132: advisorName,
    id: classeId,
    student_type: status,
    select_117: enrolledProgram,
    textarea_61: studyPermitDate,
    date_112: workPermitDate,
  } = student;
  const studentInfo = {
    firstName,
    lastName,
    email,
    gender,
    dob: dob ? new Date(dob) : null,
    address,
    zipCode,
    contact,
    citizenship,
    sinNumber,
    advisorName,
    classeId,
    status,
    enrolledProgram,
    studyPermitDate: studyPermitDate ? new Date(studyPermitDate) : null,
    workPermitDate: workPermitDate ? new Date(workPermitDate) : null,
    studentId: +admission_number || +student.text_105,
  };
  //   await respond(profileMsg(studentInfo));
  const newStudent = await prisma.student.create({
    data: studentInfo,
  });
  student.enrollments.forEach(async (enrollment) => {
    const newProgram = await prisma.program.upsert({
      where: {
        classeId: enrollment.class_id,
      },
      update: {},
      create: {
        title: enrollment.class_name,
        code: enrollment.class_code,
        classeId: enrollment.class_id,
      },
    });
    const newSection = await prisma.section.upsert({
      where: {
        classeId: enrollment.section_id,
      },
      update: {},
      create: {
        title: enrollment.section_name,
        code: enrollment.section_code,
        classeId: enrollment.section_id,
        programId: newProgram.id,
      },
    });
    const newSectionEnrollment = await prisma.sectionEnrollment.create({
      data: {
        studentId: newStudent.id,
        sectionId: newSection.id,
        classeSectionId: enrollment.section_id,
        classeId: enrollment.enrollment_id,
        status: enrollment.enrollment_status,
        enrolledAt: new Date(enrollment.enrollment_date),
      },
    });
    enrollment.subjects.forEach(async (subject) => {
      const newSubject = await prisma.subject.upsert({
        where: {
          classeId: subject.id,
        },
        update: {},
        create: {
          title: subject.subject_name,
          code: subject.subject_code,
          classeId: subject.id,
          credits: +subject.credits,
          sectionId: newSection.id,
          type: subject.type,
        },
      });
      await prisma.subjectEnrollment.create({
        data: {
          studentId: newStudent.id,
          subjectId: newSubject.id,
          classeSubjectId: subject.id,
          sectionId: newSection.id,
          classeSectionId: enrollment.section_id,
          programId: newProgram.id,
          classeProgramId: enrollment.class_id,
          sectionEnrollmentId: newSectionEnrollment.id,
          classeSectionEnrollmentId: enrollment.enrollment_id,
          status: subject.enrollment_status,
        },
      });
    });
  });
  return newStudent;
};

module.exports = { saveStudent };
