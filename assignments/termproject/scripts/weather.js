//if(location.protocol !== 'https:') location.protocol = 'https:'
var weather = new XMLHttpRequest();

weather.open('GET', 'https://api.wunderground.com/api/2bc32cdf623ceed5/conditions/q/MT/Bozeman.json', true);
weather.send();

weather.onload = function(){
    var weatherUpdates = JSON.parse(weather.response);
    
    document.getElementById("city-name").innerHTML = weatherUpdates.current_observation.observation_location.full;
    document.getElementById("weather-image").src = weatherUpdates.current_observation.icon_url;
    document.getElementById("weather-name").innerHTML = weatherUpdates.current_observation.icon;
}