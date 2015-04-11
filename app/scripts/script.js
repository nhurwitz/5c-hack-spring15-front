$(document).ready(function() {
	var clicked = false;

	$('.btn').click(function(){	
	 	if (!clicked){
	 		clicked = true;
	 		$( "#container" ).animate({
    			top: "-=100",
  			}, 500, function() {
   			 // Animation complete.
  			});
	 	}
	}); 
});
