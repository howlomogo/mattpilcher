//- Wow
var wow = new WOW({
	boxClass:     'wow',
	animateClass: 'animated',
	offset:       200,
	mobile:       false,
	live:         true,
	callback:     function(box) {

	},
	scrollContainer: null,
	resetAnimation: true,
});
wow.init();

// Scroll the page to the correct anchor.
$('a[href^="#"]').on('click',function (e) {
	e.preventDefault();

	var target = this.hash;
	var $target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 900, 'swing');
});



function filterPortfolio(elem, filter) {

	$(".filter-button").removeClass("active");
	$(elem).addClass("active");


	// $(".filter").fadeOut("1000", function() {
	// 	$("." + filter).fadeIn("1000");
	// });

	if(filter === "all") {
		$(".filter").fadeIn("1000");
	}
	else if(filter === "web") {
		$(".games").fadeOut("1000", function() {
			$(".web").fadeIn("1000");
		});
	}
	else if(filter === "games") {
		$(".web").fadeOut("1000", function() {
			$(".games").fadeIn("1000");
		});
	}
}
