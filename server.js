var express = require('express');       
var app = express();    
const fetch = require('node-fetch');              
app.get('/', (req, res) => {
    fetch(`https://www.cricbuzz.com/api/cricket-match/commentary/30370`)
        .then(res => res.json())
        .then(json => {
            return res.send(json);
    });
});
var port = process.env.PORT || 3030;  
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);