const express = require('express');
const app = express();
const port = 5555;


app.use(express.static('www/html'));
app.use(express.static('www/css'));
app.use(express.static('www/img'));
app.use(express.static('www/js'));

app.get('/api/*', function (req, res) {
    let api = req.url.split('/');
    api.shift();
    api.shift();
    api = api[0];
    const result = require(`./api/${api}.js`);
    res.send(result);
});

app.listen(port, () => {
    console.log(`Homework app listening at http://localhost:${port}`)
})