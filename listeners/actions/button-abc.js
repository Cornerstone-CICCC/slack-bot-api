const buttonAbcCallback = async ({ ack, body, context }) => {
  // Acknowledge the button request
  ack();

  try {
    // Update the message
    const result = await app.client.chat.update({
      token: context.botToken,
      // ts of message to update
      ts: body.message.ts,
      // Channel of message
      channel: body.channel.id,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*The button was clicked!*",
          },
        },
      ],
      text: "Message from Test App",
    });
    console.log("success", result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { buttonAbcCallback };
