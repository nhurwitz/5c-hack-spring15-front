$(document).ready(function() {
	var clicked = false;
	$('.title').click(function(){	
	 	if (clicked){
	 		clicked = false;
	 		
	 		$( "#controls" ).animate({
    			marginTop: "+=310",
  			}, 700, function() {
   			 // Animation complete.
  			});
  			var a = document.getElementById("start");
			a.value = a.defaultValue;
			var b = document.getElementById("end");
			b.value = b.defaultValue;
  			setTimeout(function() {
  				$( '.img' ).fadeTo( "medium", 1);
  			},350);
	 	}
	}); 
	$('.btn').click(function(){	
	 	if (!clicked){
	 		
	 		clicked = true;
	 		$( "#controls" ).animate({
    			marginTop: "-=310",
  			}, 700, function() {
   			 // Animation complete.
  			});
  			 $( '.img' ).fadeTo( "medium", 0 );
	 	}
	}); 

});
