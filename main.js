var apiai = require('apiai');


var options = {
    secure: false,
    sessionId: 'convo-id'
}

var app = apiai("6f3707fd712e443eb20c8eb33a798e0a", options);

console.log('creating the app is done');

var query = process.argv[2]

var request = app.textRequest(query, options);

request.on('response', function(response) {
    console.log('Intent: ' + response.result.metadata.intentName);
    console.log(response.result.fulfillment.speech);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
