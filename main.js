var apiai = require('apiai');

var app = apiai("d06bd030cc284156b8f2fdf1bcf262c5");

console.log('creating the app is done');

var query = process.argv[2]

var request = app.textRequest(query, {
    sessionId: 'conversation-1'
});

request.on('response', function(response) {
    console.log('Intent: ' + response.result.metadata.intentName);
    console.log(response.result.fulfillment.speech);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
