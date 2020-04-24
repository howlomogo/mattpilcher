$(document).ready(function() {

	var d = new Date();
   var n = d.getHours();

   if(n <=22 && n>=8)
   {
   	$("#openorclosed").css("color", "green");
      $("#openorclosed").attr("title", "We Are Open");
   }
   else {
   	$("#openorclosed").css("color", "red");
      $("#openorclosed").attr("title", "We Are Closed");
   }
});