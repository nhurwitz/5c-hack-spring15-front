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
  			
			
  				$("#graph").remove();
				$("#graphrow").append("<div id='graph'></div>");
				cy_init();
  			
	 	}
	}); 
	$('.btn').click(function(){	
		var a = $("#start").val();
		var b = $("#end").val();
		if ($(this).attr('name') == "fsp"){
			setTimeout(function() {
  				draw(["banana", "Paris"]);
  			},500);
			
		} else{ 
		if ($(this).attr('name') == "ifl" ){
      var a = document.getElementById("start");
      var b = document.getElementById("end");
      $.get('http://localhost:3000/v1/random', function(data) {
        a.value = data.origin;
        b.value = data.destination;
      });
		}
		}
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
