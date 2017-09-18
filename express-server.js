var express = require('express')
var apiai = require("apiai");

var responses = require("./generateResponse.js")


var app = express()
var agent = apiai("6f3707fd712e443eb20c8eb33a798e0a");

app.get('/', function (req, res) {
    console.log(req.query.utterance);

    var text = req.query.utterance

    var request = agent.textRequest(text, {sessionId: 'convo1'});

    request.on('response', function(response) {
        console.log('Intent: ' + response.result.metadata.intentName);
        console.log(response.result.fulfillment.speech);

        var messageBack = responses.generateResponse(response.result)
        res.send(messageBack)
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end();
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
