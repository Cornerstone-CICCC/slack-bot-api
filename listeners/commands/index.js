const { sampleCommandCallback } = require("./sample-command");
const { profileCommandCallback } = require("./profile");
const { calendarCallback } = require("./calendar");

module.exports.register = (app) => {
  app.command("/sample-command", sampleCommandCallback);
  app.command("/calendar", calendarCallback);
  app.command("/profile", profileCommandCallback);
};
