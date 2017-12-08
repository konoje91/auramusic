$(document).ready(function() {

	$('.order-action').on('click', function(){
				$('html, body').animate({
                    scrollTop: $(".order").offset().top
                }, 1000);
	});

	$('a.rooms-action').on('click', function(){
				$('html, body').animate({
                    scrollTop: $(".rooms").offset().top
                }, 1000);
	});

	$('a.menu-action').on('click', function(){
				$('html, body').animate({
                    scrollTop: $(".menu").offset().top
                }, 1000);
	});

	$('.shares-action').on('click', function(){
				$('html, body').animate({
                    scrollTop: $(".shares").offset().top
                }, 1000);
	});

	$('.contacts-action').on('click', function(){
				$('html, body').animate({
                    scrollTop: $(".contacts").offset().top
                }, 1000);
	});

});
