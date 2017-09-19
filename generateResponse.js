
var generateResponse = function(data, fields) {
    console.log(data);
    var response = ''

    fields = fillSlots(data, fields)

    // build out the business logic your own way.
    // any combination of slots. be as specific as you want.

    console.log(fields);

    if(fields.location && fields.mealTime && fields.foodType) {
        console.log("in the if statement");
        response = "Okay. " + fields.foodType + ' for ' + fields.mealTime + " in " + fields.location + '? ' +
                    "I can do that! Have you ever tried... ______"
        console.log(response);
    } else if (fields.location && fields.mealTime) {
        response = "What type of food do you want?"
    } else if (fields.location && fields.foodType) {
        response = "Breakfast, Lunch, or Dinner?"
    } else if (fields.foodType && fields.mealTime) {
        response = "And where in Richmond are you looking to eat?"
    } else if (fields.location) {
        response = "What type of food are you looking for?"
    } else if (fields.mealTime) {
        response = "What type of food are you looking for?"
    } else if (fields.foodType) {
        response = "Breakfast, lunch, or dinner?"
    } else {
        response = 'Okay. To start, is this breakfast lunch or dinner?'
    }


    return {response: response, fields:fields}
}

fillSlots = function(data, slots) {

    //if the user starts over, clear the slots.
    if(data.action == 'FindRestaurant') {
        slots.location = ''
        slots.mealTime = ''
        slots.foodType = ''
    }

    if(data.parameters.mealTime) {
        slots.mealTime = data.parameters.mealTime
    }

    if(data.parameters.neighborhoods) {
        slots.location = data.parameters.neighborhoods
    }

    if(data.parameters.foodType) {
        slots.foodType = data.parameters.foodType
    }


    console.log(slots);
    return slots

}


module.exports.generateResponse = generateResponse
