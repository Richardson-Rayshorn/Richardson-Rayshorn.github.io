var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHref = urlArray[urlArray.length - 1];

if(pageHref !== " "){
    var menu = document.querySelectorAll('ul#nav li a');
    for(var i =0; i <menu.length; i++){
        var currentUrl = menu[i].getAttribute("href");
        menu[i].parentNode.className = "";
        if(currentUrl == pageHref){
            menu[i].parentNode.className = "active";
        }
    }
}