const mysql = require('sync-mysql');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json'));
const connection = new MySql({
    host: config.mysql.host,
    user: config.mysql.username,
    password: config.mysql.password
});