const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

console.log(`--- ${app.get("env")} ---`);

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Reload the server");
  console.log(err.name, err.message);
  process.exit(1);
});

const port = process.env.PORT || 80;

app.listen(port, "127.0.0.1", (err) => {
  console.log("--- Dashcam is on ---");
  console.log(`--- Listening on 127.0.0.1:${port} ---`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDELED REJECTION! Try to reload the server");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
