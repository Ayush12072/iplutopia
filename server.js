var express = require('express');       
var app = express();    
const fetch = require('node-fetch');      


app.get('/', (req, res) => {
  fetch('https://sdata.ndtv.com/sportz/cricket/xml/ddsh09292020197698.json?t=291601390796031')
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