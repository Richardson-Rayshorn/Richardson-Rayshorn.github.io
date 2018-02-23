var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", 
              "September", "October", "November", "December"]
var myDate = new Date();
var monthName = months[myDate.getMonth()];
var day = days[myDate.getDay()];
var dayNumber = myDate.getDate();
var year = myDate.getFullYear();
document.getElementById("currentdate").innerHTML =day + ", " + dayNumber + " " + monthName + " " + year;