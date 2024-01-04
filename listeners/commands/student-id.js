const studentIdCallback = async ({ ack, respond }) => {
  try {
    await ack();
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
            text: ":bulb: If the form is closed or you have any questions regarding your student ID, please contact the Student Services team at <mailto:info@ciccc.ca|this email>.",
          },
        },
      ],
    });
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { studentIdCallback };
