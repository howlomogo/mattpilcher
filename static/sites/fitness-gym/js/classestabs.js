// Right Class Navigation ids = class1, class2, class3 etc
// Left Class Content ids = class1-content, class2-content, class3-content etc

var activenav;
// I am never using previousnav in terms of navigation it is only used in getting the id FROM the nav in order to change the relevant content.
var previousnav;

$(document).ready(function() {
	// Add Listener for click event on classnavdiv
	$(".classnavdiv").click(navigationclick);

	// Override the activenav variable - to be the first navigation on the page
	activenav = $(".classnavdiv:first");
	activenav.addClass("classnavactive");
	changeglyphicons(true, activenav);
	// Call fadeoutcontent, this doesn't fade out anything as its the first time. so set to false
	fadeoutcontent(false);
});

// Function for when navigation is clicked
function navigationclick() {
	// With the Ocardian style it is possible to close all the navigations so ONLY change the navigation styles. Do not fade anything in or out.
	if($(this).hasClass("classnavactive")){
		// This removeClass is here ONLY to suit if you close an already open accordian. It has NO affect on anything
		$(this).removeClass("classnavactive");

		changeglyphicons(false, $(this));
	}
	else {
		// Loop through the classnavdivs and check which one is active, then remove the active class from it.
		$(".classnavdiv").each(function() {
			if($(this).hasClass("classnavactive")){
				$(this).removeClass("classnavactive");
				changeglyphicons(false, $(this));
			}
		});
		// Override the previousnav with the active
		previousnav = activenav;
		// Override the activenav variable
		activenav = $(this);
		activenav.addClass("classnavactive");
		changeglyphicons(true, $(this));
		fadeoutcontent(true);
	}
}


// The isonload will only be false if it is called when the page loads
// this omits the fadeout as there is no previous active content
function fadeoutcontent(isnotonload) {
	if(isnotonload === true) {
		var previouscontentid = previousnav.attr("id")+"-content";

		// Fade out the previous content
		$("#"+previouscontentid).fadeTo( 600 , 0, function() {
    		// Set display to none on faded out object
    		$("#"+previouscontentid).css("display", "none");
    		// Call fade in function only once fade out has complete
    		fadeincontent();
  		});
	}
	else {
		// Do not fade anything out only fade in, as this is on the page load
		fadeincontent();
	}
}

function fadeincontent() {
	var activecontentid = activenav.attr("id")+"-content";
	// Set the activecontent to be displayed, as it was previously display:none -- This is so it lines up correctly
	$("#"+activecontentid).css("display", "block");

	// Fade in the active content
	$("#"+activecontentid).fadeTo( 600 , 1, function() {
  	});
}

// function to change the glyphicon from up to down or vice versa, up is for active, obj is the navigation to apply to.
function changeglyphicons(isup, obj) {
	if (isup){
		obj.children("span").addClass("glyphicon-chevron-up");
		obj.children("span").removeClass("glyphicon-chevron-down");
	}
	else{
		obj.children("span").removeClass("glyphicon-chevron-up");
		obj.children("span").addClass("glyphicon-chevron-down");
	}
}
