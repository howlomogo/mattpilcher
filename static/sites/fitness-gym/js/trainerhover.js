$(document).ready(function() {
	// Hover effect when you roll over the trainers image

	$(".trainersanimation").hide();

	$('.trainerstop').hover(
		function() {
         $(this).find(".trainersanimation").show( "scale", 
         {direction: 'both' }, 400 );

         
			//$(this).find(".trainersanimation").stop().toggle( "scale" );
			//$(this).find(".trainersanimation").stop().fadeTo(200,0.5);
			$(this).find("span").stop().delay(300).fadeTo(200,1);
		},

		// On the hoverout function I want to fadeout the maginfy glass first.
		function() {

			$(this).find(".trainersanimation").delay(200).hide( "scale", 
         {direction: 'both'}, 400 );

			$(this).find("span").stop().fadeTo(200,0);
			//$(this).find(".trainersanimation").stop().delay(200).fadeTo(400,0);
						//$(this).find(".trainersanimation").stop().toggle( "scale" );

		});
});