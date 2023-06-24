$(document).ready(function() {
	let form = $('.contact-form');

	form.validate({
		errorPlacement: function(error, element) {
			// Ensure Errors Fade In & Are Inserted After Inputs.
        	error.hide();
            error.fadeIn('200').insertAfter(element);
       },
	});
});