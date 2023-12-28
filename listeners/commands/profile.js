const { getReq } = require("../../helpers/request");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const profileCommandCallback = async ({ ack, respond, client, payload }) => {
  try {
    await ack();
    // const info = await client.users.info({
    //   user: payload.user_id,
    // });
    // const slackEmail = info.user.profile.email;
    const slackEmail = "head.tech@ciccc.ca";
    let studentFound = await prisma.student.findUnique({
      where: {
        email: slackEmail,
      },
    });
    if (studentFound) {
      await respond(
        `Hello, ${studentFound.firstName}!
            Your student ID is ${studentFound.studentId}.
            You are currently enrolled in ${studentFound.enrolledProgram}.
            You currently live at ${studentFound.address}.
            Your contact number is ${studentFound.contact}.
            You are from ${studentFound.citizenship}.
            `
      );
      return;
    }
    await respond("Wait a second, let me check my memory...");
    const endpoint = `studentsData?filter={"student_email":"${slackEmail}"}`;
    const response = await getReq(endpoint);
    if (response.data.length === 0) {
      await respond(
        "I don't think I remember you. Please make sure your email on Slack is the same as the one on Classe365."
      );
      return;
    }
    studentFound = response.data[0];
    console.log("studentFound classeId", studentFound.id);
    console.log("admission number", studentFound.admission_number);
    console.log("text_105", studentFound.text_105);
    console.log("textarea_61", studentFound.textarea_61);
    console.log("date_112", studentFound.date_112);
    const {
      first_name: firstName,
      last_name: lastName,
      email,
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
    } = studentFound;
    const studentId = admission_number || studentFound.text_105;
    await respond(`Hello, ${firstName}!
        Your student ID is ${studentId}.
        You are currently enrolled in ${enrolledProgram}.
        You currently live at ${address}.
        Your contact number is ${contact}.
        You are from ${citizenship}.`);
    // const newStudent = await prisma.student.create({
    //   data: {
    //     firstName,
    //     lastName,
    //     email,
    //     gender,
    //     dob: dob ? new Date(dob) : null,
    //     address,
    //     zipCode,
    //     contact,
    //     advisorName,
    //     citizenship,
    //     sinNumber,
    //     classeId,
    //     studentId,
    //     status,
    //     enrolledProgram,
    //   },
    // });
    // studentFound.enrollments.forEach(async (enrollment) => {
    //   const newProgram = await prisma.program.upsert({
    //     where: {
    //       classeId: enrollment.class_id,
    //     },
    //     update: {},
    //     create: {
    //       title: enrollment.class_name,
    //       code: enrollment.class_code,
    //       classeId: enrollment.class_id,
    //     },
    //   });
    //   const newSection = await prisma.section.upsert({
    //     where: {
    //       classeId: enrollment.section_id,
    //     },
    //     update: {},
    //     create: {
    //       title: enrollment.section_name,
    //       code: enrollment.section_code,
    //       classeId: enrollment.section_id,
    //       programId: newProgram.id,
    //     },
    //   });
    //   await prisma.sectionEnrollment.upsert({
    //     where: {
    //       studentId: newStudent.id,
    //       sectionId: newSection.id,
    //     },
    //     update: {},
    //     create: {
    //       studentId: newStudent.id,
    //       sectionId: newSection.id,
    //       classeSectionId: enrollment.section_id,
    //       classeId: enrollment.enrollment_id,
    //       status: enrollment.enrollment_status,
    //     },
    //   });
    //   enrollment.subjects.forEach(async (subject) => {
    //     const newSubject = await prisma.subject.upsert({
    //       where: {
    //         classeId: subject.id,
    //       },
    //       update: {},
    //       create: {
    //         title: subject.subject_name,
    //         code: subject.subject_code,
    //         classeId: subject.id,
    //         credits: +subject.subject_credit,
    //         sectionId: newSection.id,
    //         type: subject.type,
    //       },
    //     });
    //     await prisma.subjectEnrollment.upsert({
    //       where: {
    //         studentId: newStudent.id,
    //         subjectId: newSubject.id,
    //       },
    //       update: {},
    //       create: {
    //         studentId: newStudent.id,
    //         subjectId: newSubject.id,
    //         classeSubjectId: subject.id,
    //         sectionId: newSection.id,
    //         classeSectionId: enrollment.section_id,
    //         programId: newProgram.id,
    //         classeProgramId: enrollment.class_id,
    //         classeId: enrollment.enrollment_id,
    //         status: subject.enrollment_status,
    //       },
    //     });
    //   });
    // });
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { profileCommandCallback };
