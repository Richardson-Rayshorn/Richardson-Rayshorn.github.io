var bike = document.getElementById("bike-sale-link");
var compe = document.getElementById("competition-link");
var tour = document.getElementById("tour-link");
var spons = document.getElementById("sponsorship-link");
var serv = document.getElementById("service-link");

bike.addEventListener("click", bikeDes);
compe.addEventListener("click", compeDes);
tour.addEventListener("click", tourDes);
spons.addEventListener("click", sponsDes);
serv.addEventListener("click", servDes);

function bikeDes(){
    document.getElementById("bike-sale").classList.toggle("serv-display");
     document.getElementById("competition").classList.remove("serv-display");
     document.getElementById("tours").classList.remove("serv-display");
     document.getElementById("sponsorship").classList.remove("serv-display");
     document.getElementById("services-parts").classList.remove("serv-display");
    
}

function compeDes(){
     document.getElementById("competition").classList.toggle("serv-display");
     document.getElementById("bike-sale").classList.remove("serv-display");
     document.getElementById("tours").classList.remove("serv-display");
     document.getElementById("sponsorship").classList.remove("serv-display");
     document.getElementById("services-parts").classList.remove("serv-display");
}

function tourDes(){
     document.getElementById("tours").classList.toggle("serv-display");
     document.getElementById("bike-sale").classList.remove("serv-display");
     document.getElementById("competition").classList.remove("serv-display");
     document.getElementById("sponsorship").classList.remove("serv-display");
     document.getElementById("services-parts").classList.remove("serv-display");
}

function sponsDes(){
     document.getElementById("sponsorship").classList.toggle("serv-display");
     document.getElementById("bike-sale").classList.remove("serv-display");
     document.getElementById("competition").classList.remove("serv-display");
     document.getElementById("tours").classList.remove("serv-display");
     document.getElementById("services-parts").classList.remove("serv-display");
}

function servDes(){
     document.getElementById("services-parts").classList.toggle("serv-display");
     document.getElementById("bike-sale").classList.remove("serv-display");
     document.getElementById("competition").classList.remove("serv-display");
     document.getElementById("tours").classList.remove("serv-display");
     document.getElementById("sponsorship").classList.remove("serv-display");
}