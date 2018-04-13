var modelOne = document.getElementById("model-one-description");
var modelTwo = document.getElementById("model-two-description");

var bike = [
    {
        Name: "Mountain Spoke One",
        Description: "Best Bike for Mountain Tours and Racing"
    },
    {
        Name: "Mountain Spoke Two",
        Description: "Best Bike for City Rides and Racing"
    }
];

var header = document.createElement('h3');
var descript = document.createElement('p');
var info = document.createElement('article');
var btn = document.createElement('div');
var message = "Order";

if(window.location.pathname == "/assignments/termproject/modelone.html"){
    modelOne.appendChild(info).appendChild(header).innerHTML = bike[0].Name;
    modelOne.appendChild(info).appendChild(descript).innerHTML = bike[0].Description;
    modelOne.appendChild(info).appendChild(btn).innerHTML = "<a href=\"contact.html\">Order</a>";
    
    window.onload = function(){
        modelOne.classList.add("model-description-slide");
    }
}
else if(window.location.pathname == "/assignments/termproject/modeltwo.html"){
    modelTwo.appendChild(info).appendChild(header).innerHTML = bike[1].Name;
    modelTwo.appendChild(info).appendChild(descript).innerHTML = bike[1].Description;
    modelTwo.appendChild(info).appendChild(btn).innerHTML = "<a href=\"contact.html\">Order</a>";
    
    window.onload = function(){
        modelTwo.classList.add("model-description-slide");
    }
}