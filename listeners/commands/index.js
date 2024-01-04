const { sampleCommandCallback } = require("./sample-command");
const { profileCommandCallback } = require("./profile");
const { calendarCallback } = require("./calendar");
const { studentIdCallback } = require("./student-id");
const { immigrationFaqCallback } = require("./immigration-faq");
const { virtualAssistantCallback } = require("./virtual-assistant");

module.exports.register = (app) => {
  app.command("/sample-command", sampleCommandCallback);
  app.command("/calendar", calendarCallback);
  app.command("/profile", profileCommandCallback);
  app.command("/student-id", studentIdCallback);
  app.command("/immigration-faq", immigrationFaqCallback);
  app.command("/change-schedule", virtualAssistantCallback);
  app.command("/change-start-date", virtualAssistantCallback);
  app.command("/transcript", virtualAssistantCallback);
  app.command("/loa", virtualAssistantCallback);
  app.command("/loe", virtualAssistantCallback);
};
