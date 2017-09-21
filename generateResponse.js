
var generateResponse = function(data, slots) {
    console.log(data);
    var response = ''

    slots = fillSlots(data, slots)

    // build out the business logic your own way.
    // any combination of slots. be as specific as you want.

    return {response: 'your chatbot is working!', fields:slots}
}

fillSlots = function(data, slots) {

    return slots

}

module.exports.generateResponse = generateResponse
