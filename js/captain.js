$(document).ready(function(){
    $(".normal-button").on("click", function(){
        $(".captain-planet").animate({height : "300px"});
    });

    $(".grow-button").on("click" , function(){
        $(".captain-planet").animate({height : "500px"});
    });

    $(".shrink-button").on("click", function(){
        $(".captain-planet").animate({height : "100px"});
    });

    $(".vis-button").on("click", function(){
        $(".captain-planet").animate({opacity : "1"});
    });

    $(".invis-button").on("click", function(){
        $(".captain-planet").animate({opacity: "0.05"});
    });

    $(".up-button").on("click", function(){
        $(".captain-planet").animate({top: "-=200px"}, "normal");
    });

    $(".down-button").on("click" , function(){
        $(".captain-planet").animate({top : "+=200px"}, normal);
    });

    $(".left-button").on("click", function(){
        $(".captain-planet").animate({left : "-=200px"} , "normal");
    });

    $(".right-button").on("click" , function(){
        $(".captain-planet").animate({left : "+=200px"}, "normal");
    });

    $(".back-button").on("click" , function(){
        $(".captain-planet").animate({top : "50px" , left : "80px"}, "fast");
    });


    $(document).keyup(function(e){
        switch(e.which){
            case 40 :
                $(".captain-planet").animate({top : "+=200px"} , "normal");
        }
    });

    $(document).keyup(function(e){
        switch(e.which){
            case 39 :
                $(".captain-planet").animate({left : "-=200px"} , "normal");
        }
    });

    $(document).keyup(function(e){
        switch(e.which){
            case 38 :
                $(".captain-planet").animate({top : "-=200px"}, "normal");
        }
    });

    $(document).keyup(function(e){
        switch(e.which){
            case 37 :
                $(".captain-planet").animate({left : "+=200px"} , "normal");
        }
    });
}); 