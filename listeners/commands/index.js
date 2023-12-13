const { sampleCommandCallback } = require("./sample-command");
const { helloWorldCallback } = require("./hello-world");
const { calendarCallback } = require("./calendar");

module.exports.register = (app) => {
  app.command("/sample-command", sampleCommandCallback);
  app.command("/helloworld", helloWorldCallback);
  app.command("/calendar", calendarCallback);
};
