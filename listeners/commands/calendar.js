const calendarCallback = async ({ ack, respond }) => {
  try {
    console.log("before hitting this callback");
    await ack();
    await respond({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "That was easy! Our Academic Calendar provides all relevant holidays, breaks, commencement, and school start/end dates as well.",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "You can download it by clicking <https://ciccc.ca/wp-content/uploads/2023/11/Intake-Calender-2023-2027.pdf|here>.",
          },
        },
      ],
    });
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { calendarCallback };
