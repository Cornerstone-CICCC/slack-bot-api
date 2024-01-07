const { profileCommandCallback } = require("./profile");
const { calendarCallback } = require("./calendar");
const { studentIdFormCallback } = require("./student-id-form");
const { immigrationFaqCallback } = require("./immigration-faq");
const { virtualAssistantCallback } = require("./virtual-assistant");
const { refundCallback } = require("./refund");
const { coopDocsCallback } = require("./coop-docs");
const { aboutCallback } = require("./about");
const { helpCallback } = require("./help");
const { gradesCallback } = require("./grades");

module.exports.register = (app) => {
  app.command("/calendar", calendarCallback);
  app.command("/profile", profileCommandCallback);
  app.command("/immigration-faq", immigrationFaqCallback);
  app.command("/change-schedule", virtualAssistantCallback);
  app.command("/change-start-date", virtualAssistantCallback);
  app.command("/transcript", virtualAssistantCallback);
  app.command("/loa", virtualAssistantCallback);
  app.command("/loe", virtualAssistantCallback);
  app.command("/refund", refundCallback);
  app.command("/coop-docs", coopDocsCallback);
  app.command("/student-id-form", studentIdFormCallback);
  app.command("/about", aboutCallback);
  app.command("/help", helpCallback);
  app.command("/grades", gradesCallback);
};
