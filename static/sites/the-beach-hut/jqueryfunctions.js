$(document).ready(function() {

	// Show more info on the events when you hover over the events images.
	$('.eventsimgdiv').hover(
		function() {
		$(this).find('.eventscaption').stop().animate({top: '50%'}, {duration:400});
	}, function() {
		$(this).find('.eventscaption').stop().animate({ top:'-50%'}, {duration: 400});
	});

	// Fade in the slogans when you scroll down.
	// -- To Do -- Add in an active class to determind if they have already faded in.
	function headerFadeIn() {
		$( ".sloganfade" ).each(function() {
		  	if($(this).offset().top < ($(window).scrollTop() + ($(window).height() /1.25)))
		  	{
				$(this).fadeTo( 400, 1);
	  		}
		});
	}

	function menuItemsFadeIn() {
		$( ".fooditemfade" ).each(function() {
		  	if($(this).offset().top < ($(window).scrollTop() + ($(window).height() /1.25)))
		  	{
				$(this).fadeTo( 400, 1);
	  		}
		});
	}

	// Check which section of the page is currently active
	function checkActiveLink(){
	    var scrollPos = $(document).scrollTop();
	    $('.navigationfont').each(function () {
	        var currLink = $(this); // Current navigation link
	        var refElement = $(currLink.attr("href")); // The href of the <a> tag
		    // Subtract the header padding + 1 to make sure its on the new section
	        if (refElement.position().top - 131 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	        	// Remove all navigation active classes
	            $('.navigationfont').parent().removeClass("active");
	            currLink.parent().addClass("active");
	        }
	        else{
	            currLink.parent().removeClass("active");
	        }
	    });
	}


	// Create a simple crossfade for social media buttons
	$('.social').hover(
		function() {
		$(this).find('.socialbtn1').stop().fadeTo( 400, 0);
		$(this).find('.socialbtn2').stop().fadeTo( 400, 1);
	}, function() {
		$(this).find('.socialbtn1').stop().fadeTo( 400, 1);
		$(this).find('.socialbtn2').stop().fadeTo( 400, 0);
	});




	// Scroll the page to the correct anchor.
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    // I do not want to animate if you are clicking the carousel.
	    if(target !== "#myCarousel")
	    {
		    // Subtract the header padding
		    $('html, body').stop().animate({
	     		'scrollTop': $target.offset().top - 130
			}, 900, 'swing');
		}
	});


	$(window).scroll(function() {
		headerFadeIn();
		menuItemsFadeIn();
		checkActiveLink();
	});
});


