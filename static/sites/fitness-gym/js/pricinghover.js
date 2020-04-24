// Using transit plugin to allow animation with transforms

$(document).ready(function() {
	$('.pricingcontainer').hover(
		function() {
			$(this).transition({ scale: 1.1 });
		},
		function() {
			$(this).transition({ scale: 1 });
		});
});