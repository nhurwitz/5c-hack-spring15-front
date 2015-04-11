$(document).ready(function() {
	var clicked = false;
	$('.title').click(function(){	
	 	if (clicked){
	 		clicked = false;
	 		
	 		$( "#controls" ).animate({
    			marginTop: "+=320",
  			}, 700, function() {
   			 // Animation complete.
  			});
  			setTimeout(function() {
  				$( '.img' ).fadeTo( "medium", 1);
  			},350);
	 	}
	}); 
	$('.btn').click(function(){	
	 	if (!clicked){
	 		
	 		clicked = true;
	 		$( "#controls" ).animate({
    			marginTop: "-=320",
  			}, 700, function() {
   			 // Animation complete.
  			});
  			 $( '.img' ).fadeTo( "medium", 0 );
	 	}
	}); 

});
