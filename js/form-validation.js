$(document).ready(function() {
	let form = $('.contact-form');

	form.validate({
		errorPlacement: function(error, element) {
           error.insertAfter(element);
       },
	});
});