// importamos express
import express from "express";
import bodyParser from "body-parser";
// routes
import apiRouter from "./routes";
// montamos app/express
const app = express();
// set port
const port = process.env.PORT || 3000;
// use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes api and app
app.use("/api/", apiRouter);
// app
app.listen(port, () => {
  console.log("App iniciada");
});
