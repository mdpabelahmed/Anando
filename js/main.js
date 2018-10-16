new WOW().init();
$(document).ready(function(){

	//This query for Barfiller Counter
	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller();
	$('#bar4').barfiller();


	//This query for Owl Carousel Slider
	$('.testimonial_slider').owlCarousel({
	    loop:true,
	    margin:10,
	   	autoplay:true,
	   	smartSpeed:700,
	   	items:1
	});



	//This query for Slicknav Menu
	$('#menu').slicknav({

	});


	//This query for Counter Number
	$('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});



	//This query for Magnific Popup Lightbox
	$('.view').magnificPopup({
		type: 'image',
		gallery: {
		    enabled: true
		}
		 	
	});


	var filterizd = $('.filter_riz').filterizr({
	});


	

	


});