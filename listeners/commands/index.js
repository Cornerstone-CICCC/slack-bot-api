const { profileCommandCallback } = require("./profile");
const { calendarCallback } = require("./calendar");
const { studentIdCallback } = require("./student-id");
const { immigrationFaqCallback } = require("./immigration-faq");
const { virtualAssistantCallback } = require("./virtual-assistant");
const { refundCallback } = require("./refund");
const { coopDocsCallback } = require("./coop-docs");

module.exports.register = (app) => {
  app.command("/calendar", calendarCallback);
  app.command("/profile", profileCommandCallback);
  app.command("/student-id", studentIdCallback);
  app.command("/immigration-faq", immigrationFaqCallback);
  app.command("/change-schedule", virtualAssistantCallback);
  app.command("/change-start-date", virtualAssistantCallback);
  app.command("/transcript", virtualAssistantCallback);
  app.command("/loa", virtualAssistantCallback);
  app.command("/loe", virtualAssistantCallback);
  app.command("/refund", refundCallback);
  app.command("/coop-docs", coopDocsCallback);
};
