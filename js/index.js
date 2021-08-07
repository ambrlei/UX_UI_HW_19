console.log("Your index.js file is loaded correctly!");


$(".toggle").click(function(){

    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});