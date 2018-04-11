//Javascript that builds out the slider
//and sends it to the html document

//create an array that holds the images
var images = [
    './images/bike.jpg',
    './images/family-riding-bikes.jpg'
];


//create a counter
var counter = 0;

function prev(){
    //set the counter
    counter--;
    
    //set to return at the end of the slide
    if(counter < 0){
        counter = images.length-1;
    }
    
    //set the slider to the images array
    //grab the html markup that will be used
    document.getElementById("imageslider").src = images[counter];
}

document.getElementById("prev").addEventListener('click', prev);
function next(){
    //set the counter
    counter++;
    
    //set to return at the end of the slide
    if(counter >= images.length){
        counter = 0;
    }
    
    //set the slider to the images array
    //grab the html markup that will be used
    document.getElementById("imageslider").src = images[counter];
}

document.getElementById("next").addEventListener('click', next);
function auto(){
    //set the counter
    counter++;
    
    //set to return at the end of the slide
    if(counter >= images.length){
        counter = 0;
    }
    
    //set the slider to the images array
    //grab the html markup that will be used
    document.getElementById("imageslider").src = images[counter];
}

setInterval(auto, 5000);

/*var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

var name = page.split(".").pop();
console.log(page);*/