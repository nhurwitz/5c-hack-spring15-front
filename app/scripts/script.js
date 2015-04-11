$(document).ready(function() {
	var clicked = false;

	$('.btn').click(function(){	
	 	if (!clicked){
	 		clicked = true;
	 		$( "#controls" ).animate({
    			marginTop: "-=320",
  			}, 500, function() {
   			 // Animation complete.
  			});
	 	}
	}); 
});
