const { getReq } = require("../requests");

const getStudentFromAPI = async (studentEmail) => {
  const endpoint = `studentsData?filter={"student_email":"${studentEmail}"}`;
  const response = await getReq(endpoint);
  return response.data[0];
};

module.exports = { getStudentFromAPI };
