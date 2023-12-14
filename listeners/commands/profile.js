const { getReq } = require("../../helpers/request");

const profileCommandCallback = async ({ ack, respond, client, payload }) => {
  try {
    await ack();
    await respond("testing1");
    const info = await client.users.info({
      user: payload.user_id,
    });
    // const email = info.user.profile.email;
    const email = "head.tech@ciccc.ca";
    const endpoint = `studentsData?filter={"student_email":"${email}"}}`;
    const response = await getReq(endpoint);
    const student = response.data[0];
    console.log("student", student);

    await respond("testing2");
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { profileCommandCallback };
