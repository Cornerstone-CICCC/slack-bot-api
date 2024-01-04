const immigrationFaqCallback = async ({ ack, respond }) => {
  try {
    await ack();
    await respond({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "You can find the most frequently asked immigration questions through this link <https://ciccc-family.notion.site/Frequently-Asked-Immigration-Questions-17dc64e6072e4e929412e00323caf533?pvs=4|here>.",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: ":bulb: If you can't find the answer for your questions, please contact your student advisor or <mailto:francisco@ciccc.ca|Francisco>.",
          },
        },
      ],
    });
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { immigrationFaqCallback };
