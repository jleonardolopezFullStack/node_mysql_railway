const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routerApp = require("./src/router/routerApp");
const { PORT } = require("./config.js");

const app = express();
//const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routerApp);

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
});
