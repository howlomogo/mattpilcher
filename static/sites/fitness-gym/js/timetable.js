$(document).ready(function() {

   // Add Listener for click event on timetablebtn
   $(".timetablebtn").click(filtertimetable);
   $(".cellfull").css("opacity", "1");
});

function filtertimetable() {
   var classtofilter = $(this).attr("id");

   $(".timetablebtn").removeClass("activefilter");
   $(this).addClass("activefilter");

   if(classtofilter === "All")
   {
      $(".cellfull").fadeTo(600, 1);
   }
   else {
      $(".cellfull").fadeTo(600, 0);
      $(".cellfull:contains('" + classtofilter + "')").fadeTo(600, 1);
   }
}

