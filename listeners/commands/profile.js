const { getReq } = require("../../helpers/request");

const profileCommandCallback = async ({ ack, respond, client }) => {
  try {
    await ack();
    await respond("testing1");
    // get student email from slack
    console.log("client", client);
    const email = await client.users.profile.get({
      user: client.user_id,
    });
    console.log("email", email);
    const endpoint = `studentsData?filter={"student_email":"${email}"}}`;
    const response = await getReq(endpoint);
    const student = response.data[0];
    console.log("student", student);
    // get student from classe365
    // if found, save it on db
    // if not, ask student to update email at classe365, same as in slack
    await respond("testing2");
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { profileCommandCallback };
