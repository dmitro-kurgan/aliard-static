$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $(".navbar-toggle .icon-bar:first-child").toggleClass("top-animate", 1000);
        $(".navbar-toggle .icon-bar:nth-child(2)").toggleClass("mid-animate", 500);
        $(".navbar-toggle .icon-bar:last-child").toggleClass("bottom-animate", 1000);
    });
});