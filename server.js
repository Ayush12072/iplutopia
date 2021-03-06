var express = require('express');
var app = express();
const fetch = require('node-fetch');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    fetch('https://sdata.ndtv.com/sportz/cricket/xml/nzau03032021198125.json?_=1614748885051')
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            return res.send(data);
        })
        .catch((error) => {
            console.error('Error:', error);
            return res.send(`400 error`);
        });

});
var port = process.env.PORT || 3030;
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
);
