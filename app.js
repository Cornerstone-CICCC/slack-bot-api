const { App } = require("@slack/bolt");
const { registerListeners } = require("./listeners");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

registerListeners(app);

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ App is running!");
})();
