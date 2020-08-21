
exports.run = function (req) {
    const connection = require('../lib/sql.js');
    connection.query("SELECT * FROM entries WHERE date < " + new Date().getTime());
}