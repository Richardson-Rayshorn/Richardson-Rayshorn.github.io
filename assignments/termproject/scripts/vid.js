var play = document.getElementById("play");
var video = document.getElementById("main-video");
var vidTwo = document.getElementById("cover-video");
var control = document.createAttribute("control");

play.addEventListener("click", plays);

function plays(){
    this.style.display = "none";
    vidTwo.style.display = "none";
    video.play();
    video.setAttribute(control);
}