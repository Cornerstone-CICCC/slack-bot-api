const { getStudent } = require("../../helpers/student/getStudent");
const { getStudentGrades } = require("../../helpers/grades/getGrades");
const { gradesMsg } = require("../messages/grades");

const gradesCallback = async ({ ack, respond, client, payload }) => {
  try {
    await ack();
    const info = await client.users.info({
      user: payload.user_id,
    });
    const slackEmail = info.user.profile.email;
    const studentFound = await getStudent(slackEmail);
    if (!studentFound) {
      await respond(
        "I don't think I remember you. Please make sure your email on Slack is the same as the one on Classe365."
      );
      return;
    }
    await respond("Please, let me check your grades...");
    const studentGrades = await getStudentGrades({
      classeId: studentFound.classeId,
      id: studentFound.id,
    });
    await respond({
      blocks: gradesMsg(studentGrades),
    });
    return;
  } catch (error) {
    console.error("error at get grades", error);
  }
};

module.exports = { gradesCallback };
