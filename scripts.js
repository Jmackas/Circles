
// Area of circle function
function areaOfCircle() {
    // Variable declarations
    var radius;
    var totalArea;

    // Retrieve user input
    radius = document.getElementById("inputRadius").value;
    totalArea = document.getElementById("inputTotalArea").value;

    // Algorithm
    if (!(radius == "")) {
        totalArea == "";
        totalArea = Math.PI * Math.pow(radius, 2);
        
        // Round the answer to two decimal places
        totalArea = totalArea.toFixed(2);

        // Output to user
        document.getElementById("inputTotalArea").value = totalArea;
    }

    else {
        radius == "";
        radius = Math.PI * Math.pow(radius, 2);
    }
}