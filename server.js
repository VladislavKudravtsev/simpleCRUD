const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const routes = require("./routes");
const app = express();

app.use(bodyParser.json());

app.use("/", routes);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected");
  } catch (error) {
    console.error(error);
  }
};

const init = async () => {
  await connect();
  app.listen(3000);
};

init();
