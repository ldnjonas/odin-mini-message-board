const { Pool } = require("pg");

module.exports = new Pool({
  host: "ep-steep-forest-a21s0i7d.eu-central-1.pg.koyeb.app", // or wherever the db is hosted
  user: "koyeb-adm",
  database: "koyebdb",
  password: "npg_82UyXcnqNrRO"
});