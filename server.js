var express = require('express');       
var app = express();    
const fetch = require('node-fetch');   
var $ = require( "jquery" );   

function getData(){
  $.ajax({
      url : 'https://www.cricbuzz.com/api/cricket-match/commentary/30370',
      type : 'GET',
      success : function(data) { 
          console.log(data);
          // plotData(data);
          // if(typeof(data.matchHeader)!=undefined){
          //     var Txt = data.matchHeader.team1.name + " VS " + data.matchHeader.team2.name + ", "+data.matchHeader.matchDescription;
          //     $('.todays-match').text(Txt);
          // }
      },
      error : function(request)
      {
          console.log(request);
      }
  });
}
getData();

app.get('/', (req, res) => {
  fetch('https://www.cricbuzz.com/api/cricket-match/commentary/30370')
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