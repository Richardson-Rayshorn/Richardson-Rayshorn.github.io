var play = document.getElementById("play");
var video = document.getElementById("main-video");
var vidTwo = document.getElementById("cover-video");
var control = document.createAttribute("control");
var stop= document.getElementById("stop");

play.addEventListener("click", plays);
stop.addEventListener("click", stops);


function plays(){
    this.style.display = "none";
    vidTwo.style.display = "none";
    video.play();
}

function stops(){
    play.style.display = "block";
    vidTwo.style.display = "block";
    video.pause();
}