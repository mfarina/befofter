$(document).ready(function(){

	
	setTimeout(function(){
		 $( ".image" ).animate({
			opacity: 0,
			//left: "+=50",
			//height: "toggle"
			}, 5000, function() {
				$('.image').prop('src', 'img/pes.jpg');
				$( ".image" ).animate({
				opacity: 1,
				//left: "+=50",
				//height: "toggle"
				}, 4000, function() {
				// Animation complete.
				});
			// Animation complete.
			});

		//$('.image').prop('src', 'img/pes1.jpg');
	}, 2000);
        
});
