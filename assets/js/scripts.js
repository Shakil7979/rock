$(document).ready(function(){
	// Mobile Menu
	$('.menu_icon').click(function(){
		$('.menu').slideToggle(200);

		return false
	});

	// Mobile Menu Icon
	$(document).ready(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
		});
	});

	// Products Carousel
	$('.related_products_carousel').owlCarousel({
		loop:true,
		nav:true,
		dots:false,
		autoplay:false,
		margin: 20,
		responsive : {
		    0 : {
		        items:1,
				dots:true,
		    },
		    480 : {
		        items:1,
				dots:true,
		    },
		    768 : {
		        items:2,
				dots:true,
		    },
		    992 : {
		        items:3,
				dots:false,
		    },
		    1200 : {
		        items:4,
				dots:false,
		    }
		}
	});
	$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
	$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');






});