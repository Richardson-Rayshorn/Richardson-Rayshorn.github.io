var getLink = 'https://byui-cit230.github.io/weather/data/towndata.json';
var makeRequest = new XMLHttpRequest();
makeRequest.open('GET',getLink);
makeRequest.responseType = 'json';
makeRequest.send();

makeRequest.onload = function(){
    var info = makeRequest.response;
    headArea(info);
    bodyArea(info);
}

function headArea(myJson){
    var cityName = myJson['towns'];
    
    for(var i = 0; i < cityName.length; i++){
        var franklin = document.getElementById("franklin");
        var greenville = document.getElementById("greenville");
        var springfield = document.getElementById("springfield");
        
        franklin.textContent = cityName[0].name;
        greenville.textContent = cityName[1].name;
        springfield.textContent = cityName[3].name;
    }
}

function bodyArea(myJson){
    var cityInfo = myJson['towns'];
    
    for(var i = 0; i < cityInfo.length; i++){
        var franklinInfo = document.getElementById("franklin-town");
        var greenvilleInfo = document.getElementById("greenville-town");
        var springfieldInfo = document.getElementById("springfield-town");
        
        franklinInfo.innerHTML = 'Motto: ' + cityInfo[0].motto + "<br>" + 'Year Founded: ' + cityInfo[0].yearFounded 
                                    + "<br>" + 'Current Population: ' + cityInfo[0].currentPopulation + "<br>" + 'Average Rainfall: ' + cityInfo[0].averageRainfall;
        greenvilleInfo.innerHTML = 'Motto: ' + cityInfo[1].motto + "<br>" + 'Year Founded: ' +  cityInfo[1].yearFounded 
                                    + "<br>" + 'Current Population: ' + cityInfo[1].currentPopulation + "<br>" + 'Average Rainfall: ' + cityInfo[1].averageRainfall;
        springfieldInfo.innerHTML = 'Motto: ' + cityInfo[3].motto + "<br>" + 'Year Founded: ' +  cityInfo[3].yearFounded 
                                    + "<br>" + 'Current Population: ' + cityInfo[3].currentPopulation + "<br>" + 'Average Rainfall: ' + cityInfo[3].averageRainfall;
    }
}