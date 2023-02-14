const { createPool } = require("mysql2/promise");
const {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} = require("../../config.js");

const pool = createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT, // Aqui se coloca el puerto del hardware
  database: DB_NAME,
});

//Nombre Container: sqlleo
//Port Container Hardware: 3307
//Port Container Docker: 3306

module.exports = pool;
