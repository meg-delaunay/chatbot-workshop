
var generateResponse = function(data) {
    console.log(data);
    var response = ''

    if(data.metadata.intentName == 'FindRestaurant') {
        if(data.parameters.mealTime == 'breakfast') {
            response = 'Good morning! What do you want for breakfast?'
        } else if(data.parameters.mealTime == 'lunch') {
            response = 'Lunch time? What type of food are you looking for today?'
        } else if(data.parameters.mealTime == 'dinner') {
            response = 'Good evening. Any specific food in mind for dinner?'
        } else {
            response = 'What type of food do you want?'
        }
    }

    return response
}


module.exports.generateResponse = generateResponse
