
// Area of circle function
function areaOfCircle() {
    
    // Variable declarations
    var radius;
    var finalAnswer;
    
    // Retrieve user input
    radius = document.getElementById("inputRadius").value;
    
    // Algorithm
    finalAnswer = Math.PI * radius;

    // Output to user
    document.getElementById("outputCircleArea").innerHTML = finalAnswer;
}