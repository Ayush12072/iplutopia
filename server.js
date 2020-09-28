var express = require('express');       
var app = express();    
const fetch = require('node-fetch');              
app.get('/', (req, res) => {
  fetch('https://www.cricbuzz.com/api/cricket-match/commentary/30370',{
    method: 'GET',
    headers: {
      'accept-ranges' :'bytes',
      'access-control-allow-origin ':'*',
      'content-encoding ':'gzip',
      'content-length ':'5959',
      'content-type ':'application/json',
      'server ':'nginx',
      'status ':'200',
      'vary ':'Accept-Encoding'
    },
  })
  .then(response => response)
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