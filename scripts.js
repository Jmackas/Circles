
// Area of circle function
function piArea() {
    // Variable declarations
    var radius;
    var totalArea;

    // Retrieve user input
    radius = document.getElementById("inputRadius").value;
    totalArea = document.getElementById("inputTotalArea").value;

    alert("inputTotalArea");

    // Total area function
    function areaOfCircle() {
        totalArea == "";
        totalArea = Math.PI * Math.pow(radius, 2);
        
        // Round the answer to two decimal places
        totalArea = totalArea.toFixed(2);

        // Output to user
        document.getElementById("inputTotalArea").value = totalArea;
    }

    // Radius function
    function radiusOfCircle() {
        radius == "";
        radius = Math.sqrt(totalArea / Math.PI);

        // Round the answer to two decimal places
        radius = radius.toFixed(2);

        // Output to user
        document.getElementById("inputRadius").value = radius;
    }
}