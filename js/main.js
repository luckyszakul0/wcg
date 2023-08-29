$(document).ready(function(){

    //function that handles image enlargenment when clicked
    $(".image-container").click(function(){
        $(this).toggleClass("clicked");
    })

    //function that handles styles on mouseover and mouseout
    $(".image-container").hover(function(){
        $(".image-container").removeClass("hovered");
        $(this).addClass("hovered");
        $(".image-container").addClass("not-hovered");
        $(this).removeClass("not-hovered");
    }, function(){
        $(".image-container").removeClass("not-hovered");
        $(".image-container").removeClass("hovered");
        $(".image-container").removeClass("clicked");
    })
})