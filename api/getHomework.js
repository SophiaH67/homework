const mysql = require('sync-mysql');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json'));
const connection = new mysql({
    host: config.mysql.host,
    user: config.mysql.username,
    password: config.mysql.password,
    database: "homework"
});

exports.result = connection.query("SELECT * FROM entries WHERE date < " + new Date().getTime());