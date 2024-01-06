const helpCallback = async ({ ack, respond }) => {
  try {
    await ack();
    await respond({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Hi! :paw_prints:, \n :dog: My name is Zoey and I am the CICCC Tech Community Manager! \n I am here to provide you useful information about the college, programs, academics and so on. \n If I am not able to find the answer by myself, I will find who has the answer! \n I am fast as I play fetch! :tennis: \n Feel free to contact me at anytime!",
          },
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { helpCallback };
