const { getStudent } = require("../../helpers/student/getStudent");

const virtualAssistantCallback = async ({ ack, respond, client, payload }) => {
  try {
    await ack();
    const info = await client.users.info({
      user: payload.user_id,
    });
    const slackEmail = info.user.profile.email;
    let studentFound = await getStudent(slackEmail);
    await respond({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "In order to request that, please submit your request through our <https://forms.office.com/r/Vk134zDXe8|Virtual Assistant>.",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: ":bulb: *TIP:* You will need to provide your student ID number. As a nice friend, I already have it for you. :wink:",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `:identification_card: Your student ID is *${studentFound.studentId}*`,
          },
        },
      ],
    });
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { virtualAssistantCallback };
