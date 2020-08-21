const mysql = require('sync-mysql');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json'));
const connection = require('./lib/sql.js');

exports.result = connection.query("SELECT * FROM entries WHERE date < " + new Date().getTime());