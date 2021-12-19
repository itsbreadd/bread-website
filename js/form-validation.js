$(document).ready(function() {
	let form = $('.contact-form');

	form.checkValidity();

	form.on('submit', function () {
		console.log('form submitted');
	});
});