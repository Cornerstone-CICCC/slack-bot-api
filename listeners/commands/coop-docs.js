const coopDocsCallback = async ({ ack, respond }) => {
  try {
    await ack();
    await respond({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "There are 4 documents needed for you to graduate, you can find detailed templates and information on your Classe365 profile, but here’s an overview:",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "• Host Agreement \n • Performance Evaluation \n • Final Report \n • Exit Survey Completion: <https://forms.office.com/r/2qD4qfSqDz|Exit Survey>",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "If you have any questions, please contact the Co-op Compliance Team:",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "• Swetha - Co-op Compliance Assistant - <mailto:compliance.assistant@ciccc.ca|compliance.assistant@ciccc.ca>  \n • Bruno - Co-op Compliance Manager - <mailto:compliance.manager@ciccc.ca|compliance.manager@ciccc.ca>",
          },
        },
      ],
    });
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { coopDocsCallback };
