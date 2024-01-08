const { getReq } = require("../utils/request");

const getGradesFromAPI = async (studentClasseId) => {
  // const response = await getReq(`studentScore?acds_id=1&id=7786`);
  const response = await getReq(`studentScore?acds_id=1&id=${studentClasseId}`);
  return [...response.data.data];
};

module.exports = { getGradesFromAPI };
