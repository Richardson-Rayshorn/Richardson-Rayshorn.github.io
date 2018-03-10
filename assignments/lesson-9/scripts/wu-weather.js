//API Key - 2bc32cdf623ceed5

var weatherUpdates = new XMLHttpRequest();

weatherUpdates.open('GET', 'https://api.wunderground.com/api/2bc32cdf623ceed5/conditions/q/MN/Franklin.json', true);
weatherUpdates.send();

weatherUpdates.onload = function(){
    var weatherData = JSON.parse(weatherUpdates.response);
    console.log(weatherData);
    document.getElementById("cityName").innerHTML = weatherData.current_observation.display_location.full;
    document.getElementById("weatherType").innerHTML = weatherData.current_observation.weather;
    document.getElementById("weatherTypeImage").src = weatherData.current_observation.icon_url;
    document.getElementById("highLevel").innerHTML = "High: " + weatherData.current_observation.feelslike_f + "&deg; F";
    document.getElementById("lowLevel").innerHTML = "Low: " + weatherData.current_observation.dewpoint_f + "&deg; F";
    document.getElementById("precipitation").innerHTML = "Precipitation: " + weatherData.current_observation.relative_humidity;
    document.getElementById("windSpeed").innerHTML = "Wind Speed: " + weatherData.current_observation.wind_mph + " mpg " 
                                                    + weatherData.current_observation.wind_dir;
    document.getElementById("windChill").innerHTML = weatherData.current_observation.windchill_string;
}

/************ Forecast ***********/
var forecastArea = document.getElementById("forecastTable");

var address = 'https://api.wunderground.com/api/2bc32cdf623ceed5/forecast10day/q/MN/Franklin.json';
var forecastUpdate = new XMLHttpRequest();
forecastUpdate.open('GET', address);
forecastUpdate.send();


forecastUpdate.onload = function(){
    var forecastData = JSON.parse(forecastUpdate.response);
    console.log(forecastData);
    forecastLoop(forecastData);
}

function forecastLoop(myJson){
    var forecasder = myJson['forecast']['simpleforecast']['forecastday'];
    var l = forecasder.length;
        
     for(var i = 0; i < l; i++){
        var tables = document.createElement('table');
        var di = document.createElement('div');
        var tableHeaders = document.createElement('thead');
        var tableBodys = document.createElement('tbody');
        var ths = document.createElement('th');
        var tr1 = document.createElement('tr');
        var tr2 = document.createElement('tr');
        var temp = document.createElement('td');
        ths.innerHTML = 'Day: ' + forecasder[i].period;
        temp.innerHTML = forecasder[i].high.fahrenheit + '&deg;F';
         
        tables.appendChild(tableHeaders);
        tableHeaders.appendChild(ths);
        tables.appendChild(tableBodys);
        tableBodys.appendChild(tr2);
        tr2.appendChild(temp);
        di.appendChild(tables);
        forecastArea.append(di);
         
    }
        
        
}