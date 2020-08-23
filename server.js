'use strict';
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 5555;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('www/html'));
app.use(express.static('www/css'));
app.use(express.static('www/img'));
app.use(express.static('www/js'));

app.get('/api/*', apiHandler);
app.post('/api/*', apiHandler);
app.put('/api/*', apiHandler);
app.delete('/api/*', apiHandler);

function apiHandler(req, res) {
    let api = req.url.split('/');
    api.shift();
    api.shift();
    api = api[0];
    const result = require(`./api/${api}.js`);
    res.send(result.run(req));
}

app.listen(port, () => {
    console.log(`Homework app listening at http://localhost:${port}`)
})