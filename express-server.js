var express = require('express')
var apiai = require("apiai");

var responses = require("./generateResponse.js")


var app = express()
var agent = apiai("6f3707fd712e443eb20c8eb33a798e0a");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.static(__dirname + '/static'));


let necessaryFields = {
  location: '',
  foodType: '',
  mealTime: ''
}

app.get('/response', function (req, res) {
    var text = req.query.utterance

    console.log(JSON.stringify(text));

    var request = agent.textRequest(text, {sessionId: 'convo1'});

    request.on('response', function(response) {
        console.log('Intent: ' + response.result.metadata.intentName);
        console.log(response.result.fulfillment.speech);

        var messageBack = responses.generateResponse(response.result, necessaryFields)

        console.log(messageBack.response);

        necessaryFields = messageBack.fields
        res.send(messageBack.response)
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end();
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
