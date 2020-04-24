$(document).ready(function() {

// This script needs to resize the navigation. the links within it, the line height, logo size.
$(window).scroll(function() {
  if ($(document).scrollTop() > 1) {
  	$('.navbar').switchClass("largenav", "smallnav", 400, "easeInOutQuad" );
  	$('.navlink').switchClass("largenavlink", "smallnavlink", 400, "easeInOutQuad" );
  	$('.navimg').switchClass("largenavimg", "smallnavimg", 400, "easeInOutQuad" );

    //
    //$('.navbar').css("height", "50px")
  } else {
  	  	$('.navbar').switchClass("largenav", "smallnav", 400, "easeInOutQuad" );
  	  	$('.navlink').switchClass("smallnavlink", "largenavlink", 400, "easeInOutQuad" );
  	  	$('.navimg').switchClass("smallnavimg", "largenavimg", 400, "easeInOutQuad" );



    //$('.navbar').css("height", "101px");
  }
});

});