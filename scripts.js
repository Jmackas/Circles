/*--------------------------------
Circumference of a Circle
--------------------------------*/
// Radius function
function circumference_circumferenceOfCircle() {
    // Variable declarations
    var radius;
    var circumference;

    // Retrieve user input
    radius = document.getElementById("circumference_inputRadius").value;
    circumference = document.getElementById("circumference_inputCircumference").value;

    // Algorithm
    circumference = 2 * Math.PI * radius;

    // Round the answer to two decimal places
    circumference = circumference.toFixed(2);

    // Output to user
    document.getElementById("circumference_inputCircumference").value = circumference;
}

// Total circumference function
function circumference_radiusOfCircle() {
    // Variable declarations
    var radius;
    var circumference;

    // Retrieve user input
    radius = document.getElementById("circumference_inputRadius").value;
    circumference = document.getElementById("circumference_inputCircumference").value;

    // Algorithm
    // Why is it returning NaN??
    radius = circumference / (2 * Math.Pi);

    // Round the answer to two decimal places
    radius = radius.toFixed(2);

    // Output to user
    document.getElementById("circumference_inputRadius").value = radius;
}






/*--------------------------------
Area of a Circle
--------------------------------*/
// Total area function
function area_areaOfCircle() {

    // Variable declarations
    var radius;
    var totalArea;

    // Retrieve user input
    radius = document.getElementById("area_inputRadius").value;
    totalArea = document.getElementById("area_inputTotalArea").value;

    // Algorithm
    totalArea = Math.PI * Math.pow(radius, 2);

    // Round the answer to two decimal places
    totalArea = totalArea.toFixed(2);

    // Output to user
    document.getElementById("area_inputTotalArea").value = totalArea;
}

// Radius function
function area_radiusOfCircle() {

    // Variable declarations
    var radius;
    var totalArea;

    // Retrieve user input
    radius = document.getElementById("area_inputRadius").value;
    totalArea = document.getElementById("area_inputTotalArea").value;

    // Algorithm
    radius = Math.sqrt(totalArea / Math.PI);

    // Round the answer to two decimal places
    radius = radius.toFixed(2);

    // Output to user
    document.getElementById("area_inputRadius").value = radius;
}
