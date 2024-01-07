const { getGradesFromAPI } = require("./getGradesFromAPI");
const { saveGrades } = require("./saveGrades");

const getStudentGrades = async (student) => {
  const grades = await getGradesFromAPI(student.classeId);
  await saveGrades(grades, student.id);
  return grades;
};

module.exports = { getStudentGrades };
