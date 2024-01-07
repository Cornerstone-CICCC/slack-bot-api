const { getReq } = require("../utils/request");

const getStudentFromAPI = async (studentEmail) => {
  const endpoint = `studentsData?filter={"student_email":"${studentEmail}"}`;
  const response = await getReq(endpoint);
  if (!response.data.length) {
    return null;
  }
  return response.data[0];
};

module.exports = { getStudentFromAPI };
