
exports.run = function (req) {
    const connection = require('../lib/sql.js').connection;
    let values = []; // id
    values.push(parseInt(req.body.id));
    return connection.query("DELETE FROM entries WHERE id = ?", values);
}