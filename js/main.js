$(document).ready(function(){
	$('#hotel-form').show();
	$('#ticket-form').hide();
	$('#place-form').hide();

	$('#hotel-item span').addClass('line');
	
	//Click on ticket
	$('#ticket-item').click(function(){
		
		$('#hotel-form').hide();
		$('#ticket-form').show();
		$('#place-form').hide();

		$('#hotel-item span').removeClass('line');	
		$('#ticket-item span').addClass('line');	
		$('#place-item span').removeClass('line');	
	});

	//Click on place
	$('#place-item').click(function(){
		
		$('#hotel-form').hide();
		$('#ticket-form').hide();
		$('#place-form').show();

		$('#hotel-item span').removeClass('line');	
		$('#ticket-item span').removeClass('line');	
		$('#place-item span').addClass('line');	
	});

	//Click on hotel
	$('#hotel-item').click(function(){
		
		$('#hotel-form').show();
		$('#ticket-form').hide();
		$('#place-form').hide();

		$('#hotel-item span').addClass('line');	
		$('#ticket-item span').removeClass('line');	
		$('#place-item span').removeClass('line');	
	});

	$('#second').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	}),

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
});