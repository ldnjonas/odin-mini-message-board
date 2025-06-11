const pool = require("./pool");


// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

async function insertPost(username){
    console.log(`Inserting ${username} into DB...`)
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
    insertPost
}
