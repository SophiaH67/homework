'use strict';
exports.run = function (req) {
    const connection = require('../lib/sql.js').connection;
    let values = [];
    values.push(req.body.title);
    values.push(req.body.tasks);
    values.push(req.body.time);
    values.push("null");
    return connection.query('INSERT INTO `entries` (`title`, `tasks`, `date`, `link`) VALUES (?, ?, ?, ?)', values);
}