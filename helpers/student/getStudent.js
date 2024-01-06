const { getStudentFromDB } = require("./getStudentFromDB");
const { getStudentFromAPI } = require("./getStudentFromAPI");
const { saveStudent } = require("./saveStudent");

const getStudent = (studentEmail) => {
  const savedStudent = getStudentFromDB(studentEmail);
  if (savedStudent) {
    return savedStudent;
  }
  const newStudent = getStudentFromAPI(studentEmail);
  if (newStudent) {
    const newSavedStudent = saveStudent(newStudent);
    return newSavedStudent;
  }
  return null;
};

module.exports = { getStudent };
