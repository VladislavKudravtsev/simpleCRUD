const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models/index");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

const app = express();

app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/users/:userId/posts", postRouter);

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
