const { getStudent } = require("../../helpers/student/getStudent");

const studentIdFormCallback = async ({ ack, respond, client, payload }) => {
  try {
    await ack();
    const info = await client.users.info({
      user: payload.user_id,
    });
    const slackEmail = info.user.profile.email;
    let studentFound = await getStudent(slackEmail);
    if (!studentFound) {
      await respond(
        "I don't think I remember you. Please make sure your email on Slack is the same as the one on Classe365."
      );
      return;
    }
    await respond(`Your student advisor is *${studentFound.advisorName}*.`);
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { studentIdFormCallback };
