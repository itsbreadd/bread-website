$(document).ready(function() {
	$('.switch input').change(function() {
		console.log('hit');
		var body = this.checked ? 'white' : '#2e2e2e',
			bodyFont = this.checked ? 'black' : 'white',
			nav  = this.checked ? 'white' : '#1c1c1c',
			header = this.checked ? 'white' : '#1c1c1c',
			footer = this.checked ? 'white' : '#1c1c1c';

		$('body').css('background-color', body);
		$('header').css('background-color', header);
		$('footer').css('background-color', footer);
	});
});