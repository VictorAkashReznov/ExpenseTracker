const express = require("express");
const cron = require("node-cron");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB connection is successful.");
  })
  .catch((error) => {
    console.log(error);
  });
const run = () => {
  cron.schedule("* * * * *", () => {
    console.log("running a task every minute");
  });
};
run();
app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
