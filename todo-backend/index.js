const express = require("express");
const app = express();
require("dotenv").config();
const todoSequelize = require("./util/db");
const port = process.env.PORT || 3001;
const { reqLogger } = require("./util/middleware");
const todosRouter = require("./routes/todos");

// middleware
app.use(express.json());
app.use(reqLogger);
app.use("/api/todos", todosRouter);

const start = async () => {
  try {
    await todoSequelize.authenticate();
    console.log("DB Connection Successful");
    await todoSequelize.sync({ alter: true });
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log("Error in db connection or starting the server.");
  }
};

start();
