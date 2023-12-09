const helloWorldCallback = async ({ ack, payload, context, respond }) => {
  // Acknowledge the command request

  try {
    await ack();
    await respond({
      token: context.botToken,
      // Channel to send message to
      channel: payload.channel_id,
      // Include a button in the message (or whatever blocks you want!)
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Go ahead. Click it.",
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "Click me!",
            },
            action_id: "button_abc",
          },
        },
      ],
      // Text in the notification
      text: "Message from Test App",
    });
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { helloWorldCallback };
