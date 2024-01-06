const { getStudent } = require("../../helpers/student/getStudent");

const studentIdFormCallback = async ({ ack, respond }) => {
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
            text: "Student ID form will open during the 1st week of classes on every intake, you can find the forms through this link <https://ciccc.classe365.com/form/view/student-id-request|here>.",
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
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: ":information_source: If the form is closed or you have any questions regarding your student ID, please contact the Student Services team at <mailto:info@ciccc.ca|this email>.",
          },
        },
      ],
    });
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { studentIdFormCallback };
