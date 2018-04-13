var map;

function Maps(){
    map = new google.maps.Map(document.getElementById("map-area"), {
        center:{lat: 45.6794851, lng:-111.1209423},
        zoom: 6
    });
}