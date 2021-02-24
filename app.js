const express = require("express");
const morgan = require("morgan");
const cron = require("node-cron");
const controller = require("./controller");
const app = express();
const router = require("./routes");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/", router);

cron.schedule("* * * * *", () => {
  controller.locationUpdate();
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "Error",
    message: `Can't find the ${req.originalUrl} for this server`,
  });
});

module.exports = app;
