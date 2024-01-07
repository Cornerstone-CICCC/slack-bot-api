const gradesMsg = (studentGrades) => {
  const slackBlocks = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "This is what I found:",
      },
    },
  ];
  studentGrades.forEach((grade, i) => {
    const { subject, assessments } = grade;
    if (!subject.dis_published_score_value) return;
    slackBlocks.push({
      type: "header",
      text: {
        type: "plain_text",
        text: subject.subject_name,
        emoji: true,
      },
    });
    const blockFields = [];
    assessments.forEach((assessment) => {
      if (!assessment.dis_score) return;
      blockFields.push({
        type: "mrkdwn",
        text: `*${assessment.name}:*`,
      });
      blockFields.push({
        type: "mrkdwn",
        text: `${assessment.dis_score}`,
      });
    });
    slackBlocks.push({
      type: "section",
      fields: blockFields,
    });
    slackBlocks.push({
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: "*Final Score:*",
        },
        {
          type: "mrkdwn",
          text: `*${subject.dis_published_score_value}*`,
        },
      ],
    });
    if (i < studentGrades.length - 1) {
      slackBlocks.push({
        type: "divider",
      });
    }
  });
  if (slackBlocks.length === 1) {
    return {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "I couldn't find any grades for you. Please contact your Program Manager.",
      },
    };
  }
  return slackBlocks;
};

module.exports = { gradesMsg };
