document.addEventListener("DOMContentLoaded",function(){
    var bike = document.getElementById("bike-item").addEventListener("click", bikes); 
    var activity = document.getElementById("activity-item").addEventListener("click", activities);
    var about = document.getElementById("about-item").addEventListener("click", abouts);

    function bikes(){
        document.getElementById("bike-dropdown").classList.toggle("sec-nav-show");
        document.getElementById("activity-dropdown").classList.remove("sec-nav-show");
        document.getElementById("about-dropdown").classList.remove("sec-nav-show");
    }
    
    function activities(){
        document.getElementById("activity-dropdown").classList.toggle("sec-nav-show");
        document.getElementById("bike-dropdown").classList.remove("sec-nav-show");
        document.getElementById("about-dropdown").classList.remove("sec-nav-show");
    }
    
    function abouts(){
        document.getElementById("about-dropdown").classList.toggle("sec-nav-show");
        document.getElementById("bike-dropdown").classList.remove("sec-nav-show");
        document.getElementById("activity-dropdown").classList.remove("sec-nav-show");
    }
    
     var menuIcon = document.getElementById("mobile-menu-icon").addEventListener("click", navMenu);
    
    
    function navMenu(){
        document.getElementById("nav-menu").classList.toggle("nav-display");
    }
    
    var year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;
    
    
    var crumb = document.getElementById("current-page-link").href;
    
    crumb.window.location.pathname.substr(1);
});