var map;
var marker;
function Maps(){
    var area =  {lat: 45.672528, lng:-111.090696};
    map = new google.maps.Map(document.getElementById("map-area"), {
        center:area,
        zoom: 17
    });
    
    marker = new google.maps.Marker({
       position:area,
        map:map
    });
}
 