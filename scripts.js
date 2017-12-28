// Total area function
function areaOfCircle() {

    // Variable declarations
    var radius;
    var totalArea;

    // Retrieve user input
    radius = document.getElementById("inputRadius").value;
    totalArea = document.getElementById("inputTotalArea").value;    

    // Algorithm
    totalArea = Math.PI * Math.pow(radius, 2);

    // Round the answer to two decimal places
    totalArea = totalArea.toFixed(2);

    // Output to user
    document.getElementById("inputTotalArea").value = totalArea;
}

// Radius function
function radiusOfCircle() {

    // Variable declarations
    var radius;
    var totalArea;

    // Retrieve user input
    radius = document.getElementById("inputRadius").value;
    totalArea = document.getElementById("inputTotalArea").value;

    // Algorithm
    radius = Math.sqrt(totalArea / Math.PI);

    // Round the answer to two decimal places
    radius = radius.toFixed(2);

    // Output to user
    document.getElementById("inputRadius").value = radius;
}
