
var generateResponse = function(data, slots) {
    console.log(data);
    let response = 'Your chatbot is working, with no intent found.'

    slots = fillSlots(data, slots)

    // build out the business logic your own way.
    // any combination of slots. be as specific as you want.

    // usually some combination of:
    //      checking intent/action
    //      checking which slots are already filled
    //      checking which slots need to be added
    //      emptying or resetting slots

    if(data.action == '<Intent_Name>') {
        response = 'Your chatbot found an intent.'
    }

    return {response: response, fields:slots}
}

fillSlots = function(data, slots) {

    return slots

}

module.exports.generateResponse = generateResponse
