/************************************* Springfield *******************************************************/

var weatherUpdates = new XMLHttpRequest();

weatherUpdates.open('GET', 'https://api.wunderground.com/api/2bc32cdf623ceed5/conditions/q/OR/Springfield.json', true);
weatherUpdates.send();

weatherUpdates.onload = function(){
    var weatherData = JSON.parse(weatherUpdates.response);
    document.getElementById("springfieldCityName").innerHTML = weatherData.current_observation.display_location.full;
    document.getElementById("springfieldWeatherType").innerHTML = weatherData.current_observation.weather;
    document.getElementById("springfieldWeatherTypeImage").src = weatherData.current_observation.icon_url;
    document.getElementById("springfieldHighLevel").innerHTML = "High: " + weatherData.current_observation.feelslike_f + "&deg; F";
    document.getElementById("springfieldLowLevel").innerHTML = "Low: " + weatherData.current_observation.dewpoint_f + "&deg; F";
    document.getElementById("springfieldPrecipitation").innerHTML = "Precipitation: " + weatherData.current_observation.relative_humidity;
    document.getElementById("springfieldWindSpeed").innerHTML = "Wind Speed: " + weatherData.current_observation.wind_mph + " mpg " 
                                                    + weatherData.current_observation.wind_dir;
    document.getElementById("springfieldWindChill").innerHTML = weatherData.current_observation.windchill_string;
}

/************ Forecast ***********/
var forecastArea = document.getElementById("springfieldForecastTable");

var address = 'https://api.wunderground.com/api/2bc32cdf623ceed5/forecast10day/q/OR/Springfield.json';
var forecastUpdate = new XMLHttpRequest();
forecastUpdate.open('GET', address, true);
forecastUpdate.send();


forecastUpdate.onload = function(){
    var forecastData = JSON.parse(forecastUpdate.response);
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
