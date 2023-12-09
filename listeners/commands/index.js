const { sampleCommandCallback } = require("./sample-command");
const { helloWorldCallback } = require("./hello-world");

module.exports.register = (app) => {
  app.command("/sample-command", sampleCommandCallback);
  app.command("/helloworld", helloWorldCallback);
};
