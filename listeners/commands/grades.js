const { getStudent } = require("../../helpers/student/getStudent");
const { getReq } = require("../../helpers/utils/request");

const gradesCallback = async ({ ack, respond }) => {
  try {
    await ack();
    // const info = await client.users.info({
    //   user: payload.user_id,
    // });
    // const slackEmail = info.user.profile.email;
    // const studentFound = await getStudent(slackEmail);
    // if (!studentFound) {
    //   await respond(
    //     "I don't think I remember you. Please make sure your email on Slack is the same as the one on Classe365."
    //   );
    //   return;
    // }
    await respond("Please, let me check your grades...");
    // const studentGrades = await getStudentGrades(studentFound.classeId);
    // const studentGrades = await getReq(
    //   `studentScore?acds_id=1&id=${studentFound.classeId}`
    // );
    console.log("before getReq");
    const response = await getReq(`studentScore?acds_id=1&id=7786`);
    console.log("after getReq");
    const studentGrades = [...response.data];
    const slackBlocks = [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "This is what I found:",
        },
      },
    ];
    studentGrades.forEach((subject, i) => {
      console.log("subject", subject.subject_name);
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
      subject.assessments.forEach((assessment) => {
        console.log("assessment", assessment.name);
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
      await respond({
        type: "section",
        text: {
          type: "mrkdwn",
          text: "I couldn't find any grades for you. Please contact your Program Manager.",
        },
      });
      return;
    }
    await respond({
      blocks: slackBlocks,
    });
    return;
  } catch (error) {
    console.error("error at get grades", error.message || error);
  }
};

module.exports = { gradesCallback };
