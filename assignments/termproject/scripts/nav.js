document.addEventListener("DOMContentLoaded",function(){
    var bike = document.getElementById("bike-item").addEventListener("click", bikes); 
    var activity = document.getElementById("activity-item").addEventListener("click", activities);


    function bikes(){
        document.getElementById("bike-dropdown").classList.toggle("sec-nav-show");
    }
    
    function activities(){
        document.getElementById("activity-dropdown").classList.toggle("sec-nav-show");
    }
    
    var year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;
});