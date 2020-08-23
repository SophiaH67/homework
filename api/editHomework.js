'use strict';
exports.run = function (req) {
    const connection = require('../lib/sql.js').connection;
    let values = []; // id, title, tasks, time, link
    values.push(req.body.title);
    values.push(req.body.tasks);
    values.push(parseInt(req.body.date));
    values.push(req.body.link);
    values.push(parseInt(req.body.id));
    return connection.query("UPDATE entries SET title = ?, tasks = ?, date = ?, link = ? WHERE id = ?", values);
}