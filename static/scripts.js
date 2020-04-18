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

console.log('FEWFEE')

// equivalent to $(document).ready
$(function(){
	console.log('POOP')
});

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










	// $(".filter-button").click(function(){

	//   if(value == "all")
	//   {
	//     $('.filter').fadeIn('1000');
	//   }
	//   else
	//   {
	//     $(".filter").not('.'+value).fadeOut('1000');
	//     $('.filter').filter('.'+value).fadeIn('1000');

	//   }
	// });

	// if ($(".filter-button").removeClass("active")) {
	//   $(this).removeClass("active");
	// }
	// $(this).addClass("active");


//- Map
var map;
var myLatLng = {lat: 50.8494905, lng: -1.0566019};

function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
				center: myLatLng,
				position: myLatLng,
				zoom: 16,
				scrollwheel: false,
				styles:
[
	{
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f5f5f5"
			}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#616161"
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#f5f5f5"
			}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#bdbdbd"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#eeeeee"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#757575"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e5e5e5"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#ffffff"
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#757575"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#dadada"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#616161"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	},
	{
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e5e5e5"
			}
		]
	},
	{
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#eeeeee"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#c9c9c9"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	}
]
		});

var marker = new google.maps.Marker({
	position: myLatLng,
	map: map,
	title: ''
});


}
