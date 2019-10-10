const { Pool } = require("pg")
const pool = new Pool({
    user: "postgres",
    host: "192.168.0.17",
    database: "sa",
    password: "postgres",
    port: 5434,
  });
  module.exports = pool;
  