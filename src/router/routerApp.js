const { Router } = require("express");
const pool = require("../db/db.js");

const routerApp = Router();

routerApp.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users");
  res.json(rows);
});

routerApp.get("/ping", async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  console.log(result);
  res.send(result[0]);
});

routerApp.get("/create", async (req, res) => {
  const result = await pool.query('INSERT INTO users(name) VALUES ("jhon")');
  res.send(result);
});
module.exports = routerApp;
