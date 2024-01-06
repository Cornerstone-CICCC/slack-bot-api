const { getStudentFromDB } = require("../../helpers/student/getStudentFromDB");
const {
  getStudentFromAPI,
} = require("../../helpers/student/getStudentFromAPI");
const { saveStudent } = require("../../helpers/student/saveStudent");
const { profileMsg } = require("../messages/profile");

const profileCommandCallback = async ({ ack, respond, client, payload }) => {
  try {
    await ack();
    const info = await client.users.info({
      user: payload.user_id,
    });
    const slackEmail = info.user.profile.email;
    const savedStudent = getStudentFromDB(slackEmail);
    if (savedStudent) {
      await respond(profileMsg(studentFound));
      return;
    }
    await respond("Wait a second, let me check my memory...");
    const fetchStudent = getStudentFromAPI(slackEmail);
    if (!fetchStudent) {
      await respond(
        "I don't think I remember you. Please make sure your email on Slack is the same as the one on Classe365."
      );
      return;
    }
    const newSavedStudent = await saveStudent(fetchStudent);
    await respond(profileMsg(newSavedStudent));
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { profileCommandCallback };
