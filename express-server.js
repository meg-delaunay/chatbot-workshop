var express = require('express')
var apiai = require("apiai");
var responses = require("./generateResponse.js")

var app = express()
var agent = apiai("7366b0843c4549bab1c1279ebaef473e"); // <-- YOUR CLIENT ID HERE

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.static(__dirname + '/static'));


//dumby caching system
let slots = {

}

app.get('/response', function (req, res) {
    var text = req.query.utterance

    var request = agent.textRequest(text, {sessionId: 'convo1'}); // --> GENERATE DYNAMICALLY

    request.on('response', function(response) {
        var messageBack = responses.generateResponse(response.result, slots)

        slots = messageBack.fields
        res.send(messageBack.response)
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end();
})

app.listen(3000, function () {
    console.log('Service Listening on Port 3000')
})
