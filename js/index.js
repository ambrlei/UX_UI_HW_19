console.log("Your index.js file is loaded correctly!");


if (matchMedia('only screen and (max-width: 800px)').matches){

    $(".navHover").hide();


    $(".hamburger").click(function() {
        $(".navHover").slideToggle("slow");
    });

}


