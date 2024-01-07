const { getStudentFromDB } = require("./getStudentFromDB");
const { getStudentFromAPI } = require("./getStudentFromAPI");
const { saveStudent } = require("./saveStudent");

const getStudent = async (studentEmail) => {
  const savedStudent = await getStudentFromDB(studentEmail);
  if (savedStudent) {
    return savedStudent;
  }
  const newStudent = await getStudentFromAPI(studentEmail);
  if (newStudent) {
    const newSavedStudent = await saveStudent(newStudent);
    return newSavedStudent;
  }
  return null;
};

module.exports = { getStudent };
