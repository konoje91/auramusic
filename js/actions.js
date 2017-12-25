$(document).ready(function() {

	$('form.order-form .button-order').on('click', function() {
		$(this).closest('form').submit();
	});

	$('form.order-form').on('submit', function () {
        var data = $(this).serialize(),
            form = this;

        $.ajax({
            type: 'POST',
            url: '/sendmail.php',
            data: data,
            response: 'text',
            success: function(data) {
                if(data == 'ok') {
            		$('form.order-form').hide();
            		$('.order .complete-message').show();
                } else {
                    var errors = data.split('|');
                    if(errors[0] == '1') $('input[name="name"]', form).css('border-color', 'red');
                    if(errors[1] == '1') $('input[name="phone"]', form).css('border-color', 'red');
                }
            }
        });

        return false;
    });


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
