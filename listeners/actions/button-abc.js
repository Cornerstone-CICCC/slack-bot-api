const buttonAbcCallback = async ({ ack, body, context, client }) => {
  // Acknowledge the button request

  try {
    await ack();
    console.log("body", body);
    // Update the message
    await client.views.update({
      token: context.botToken,
      // ts of message to update
      ts: body.container.message_ts,
      // Channel of message
      channel: body.container.channel_id,
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
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { buttonAbcCallback };
