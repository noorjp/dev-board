document.addEventListener("DOMContentLoaded", function () {
    var dayElement = document.getElementById("day");
    var dateElement = document.getElementById("date");

    var today = new Date();

    var optionsDay = { weekday: 'short' };
    var dayName = today.toLocaleDateString('en-US', optionsDay);

    var optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };
    var formattedDate = today.toLocaleDateString('en-US', optionsDate);

    dayElement.innerText = dayName + " ,"; 
    dateElement.innerText = formattedDate; 
});
