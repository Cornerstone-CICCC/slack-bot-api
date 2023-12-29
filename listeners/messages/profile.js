const profileMsg = (info) => {
  const blocks = [];
  if (info.studentId) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:identification_card: Your student ID is *${info.studentId}*.`,
      },
    });
  }
  if (info.enrolledProgram) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:mortar_board: You are currently enrolled in *${info.enrolledProgram}*.`,
      },
    });
  }
  if (info.address) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:house: You currently live at *${info.address}*.`,
      },
    });
  }
  if (info.contact) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:telephone_receiver: Your contact number is *${info.contact}*.`,
      },
    });
  }
  if (info.citizenship) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:earth_americas: You are from *${info.citizenship}*.`,
      },
    });
  }
  if (info.advisorName) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:information_desk_person: Your student advisor is *${info.advisorName}*.`,
      },
    });
  }
  return { blocks };
};

module.exports = { profileMsg };
