$(document).ready(function() {
	var clicked = false;
	$('#fsp').click(function(){	
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
