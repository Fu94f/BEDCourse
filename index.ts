import "./instrument";
import express from "express";
import * as Sentry from "@sentry/node";

const app = express();
const PORT = 3000;
app.use(express.json());

// All your controllers should live here

app.get("/", function rootHandler(req, res) {
  res.send("Hello world!");
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log("App is listening at port 3000");
});