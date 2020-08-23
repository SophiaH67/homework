'use strict';
exports.run = function (req) {
    const connection = require('../lib/sql.js').connection;
    return connection.query("SELECT * FROM entries WHERE date > " + new Date().getTime());
}