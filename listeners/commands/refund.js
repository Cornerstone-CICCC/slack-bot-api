const refundCallback = async ({ ack, respond }) => {
  try {
    await ack();
    await respond({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "You can find the tuition refund policy in this link: <https://ciccc.ca/tuition-refund-policy/|Refund Policy>.",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "If you still want to proceed with it, please fill the form at the end of the link's page.",
          },
        },
      ],
    });
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { refundCallback };
