'use strict';

var http = require('http');
// var apiai = require("../module/apiai");
var apiai = require("apiai");

var app = apiai("6f3707fd712e443eb20c8eb33a798e0a");

var code = 405;

var server = http.createServer(function(request, response) {
    console.log(request.method);
    console.log(request.url);

    if (request.method == 'GET' && request.url.includes('/response')) {
        console.log(request);

        var query = request.url.substring(request.url.indexOf('=')+1, request.url.length)
        console.log(query);

        var request = app.textRequest(query, {sessionId: 'convo1'});

        request.on('response', function(response) {
            console.log('Intent: ' + response.result.metadata.intentName);
            console.log(response.result.fulfillment.speech);
        });

        request.on('error', function(error) {
            console.log(error);
        });

        request.end();
    } else {
        response.writeHead(code, {});
        response.end();
    }

});

server.listen(8000);
