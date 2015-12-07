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
        redrawGraph();
  			
	 	}
	}); 
	$('#submit_button').click(function(){	
		if ($(this).attr('name') == "fsp"){
      submit();
		} else{ 
		if ($(this).attr('name') == "ifl" ){
      redrawGraph();
      var a = document.getElementById("start");
      var b = document.getElementById("end");
      $.get('http://localhost:3000/v1/random', function(data) {
        a.value = data.origin;
        b.value = data.destination;
        submit();
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

function submit() {
  var a = $("#start").val();
  var b = $("#end").val();
  $.get('http://localhost:3000/v1/path?origin=' + a + '&destination=' + b, function(data) {
    console.log(data);
    setTimeout(function() {
      draw(data);
    }, 500);
  });
}

function redrawGraph() {
  $("#graph").remove();
  $("#graphrow").append("<div id='graph'></div>");
  cy_init();
}


