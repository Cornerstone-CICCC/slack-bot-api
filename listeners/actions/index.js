const { sampleActionCallback } = require("./sample-action");
const { buttonAbcCallback } = require("./button-abc");

module.exports.register = (app) => {
  app.action("sample_action_id", sampleActionCallback);
  app.action("button_abc", buttonAbcCallback);
};
