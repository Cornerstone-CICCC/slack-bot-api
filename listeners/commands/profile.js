const { req } = require("../../helpers/request");

const profileCommandCallback = async ({ ack, respond, client }) => {
  try {
    await ack();
    // get student email from slack
    const email = client.users.profile.get("email");
    console.log("email", email);
    const endpoint = `studentsData?filter={"student_email":"${email}"}}`;
    const response = await req(endpoint, "GET");
    const student = response.data[0];
    console.log("student", student);
    // get student from classe365
    // if found, save it on db
    // if not, ask student to update email at classe365, same as in slack
    await respond("testing");
    return;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { profileCommandCallback };
