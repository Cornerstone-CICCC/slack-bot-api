const { getReq } = require("../../helpers/request");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const profileCommandCallback = async ({ ack, respond, client, payload }) => {
  try {
    await ack();
    // const info = await client.users.info({
    //   user: payload.user_id,
    // });
    // const email = info.user.profile.email;
    const email = "head.tech@ciccc.ca";
    const endpoint = `studentsData?filter={"student_email":"${email}"}`;
    const response = await getReq(endpoint);
    if (response.data.length === 0) {
      await respond(
        "I don't think I remember you. Please make sure your email on Slack is the same as the one on Classe365."
      );
      return;
    }
    const student = response.data[0];
    console.log("admission number", student.admission_number);
    console.log("text_105", student.text_105);
    const {
      student_name,
      admission_number,
      select_117: program,
      select_129: start_date,
      select_128: completion_date,
      textarea_132: advisor_name,
    } = student;
    await respond(`Hello, ${student_name}!
        Your student ID is ${admission_number}.
        You are enrolled in ${program}.
        The start date is ${start_date}.
        The completion date is ${completion_date}.
        Your student advisor is ${advisor_name}.`);

    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { profileCommandCallback };
