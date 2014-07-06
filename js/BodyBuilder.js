var screenWidth = $(window).width();
var screenHeight = $(window).height();


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".container").css( "width", screenWidth);
    $(".container").css( "height", screenHeight);
    $(".container").css( "background-size", screenWidth+"px "+ screenHeight+"px");
}else{
    screenHeight = 800;
    screenWidth = 480;
    $(".container").css( "width", screenWidth);
    $(".container").css( "height", screenHeight);
    $(".container").css( "background-size", screenWidth+"px "+ screenHeight+"px");
}


var size = (screenWidth * 12) / 100;
var size = Math.round(size);
$(".cell").css("width", size);
$(".cell").css("height", size);

