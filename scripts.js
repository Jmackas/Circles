


// Area of circle function
function areaOfCircle() {
    // Change colour to lightgray
    document.getElementById("outputCircleArea").style.color = "black";

    // Variable declarations
    var radius;
    var finalAnswer;

    // Retrieve user input
    radius = document.getElementById("inputRadius").value;

    // Algorithm
    finalAnswer = Math.PI * Math.pow(radius, 2);

    // Round the answer to two decimal places
    finalAnswer = finalAnswer.toFixed(2);

    // Output to user
    document.getElementById("outputCircleArea").innerHTML = finalAnswer;
}