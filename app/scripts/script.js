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
		var a = $("#start").val();
		var b = $("#end").val();
		if ($(this).attr('name') == "fsp" &&(a == "" || b == "")){
			alert("Enter start and end articles to scope the dank path, homey!");
		} else{ 
		if ($(this).attr('name') == "ifl" ){
			var a = document.getElementById("start");
			a.value = "random";
			var b = document.getElementById("end");
			b.value = "random";
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
	 }
	}); 

});
