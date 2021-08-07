console.log("Your index.js file is loaded correctly!");



$(".hamburgerOpen").hide();


$(".hamburger").click(function() {
    $(".hamburgerOpen").slideToggle("slow");
});