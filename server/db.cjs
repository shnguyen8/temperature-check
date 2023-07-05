const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "temperaturecheck",
  user: "postgres",
  password: "Password",
});

module.exports = pool;
