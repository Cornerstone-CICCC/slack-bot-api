const helpCallback = async ({ ack, respond }) => {
  try {
    await ack();
    // respond with a button to redirect to the about page in the slack app
  } catch (error) {
    console.error(error);
  }
};

module.exports = { helpCallback };
