$(document).ready(function() {
	let i = 0,
		textPlaceholder = $('.profile-info-text'),
		textReel = [
			'Check out my social links!',
			'Demontfort Graduate',
			'Click "Enter Site" to find out more'
		];

	function fadeText() {
		textPlaceholder.fadeTo(500, 0, function() {
			this.innerHTML = textReel[i];
			i = ++i % textReel.length;

			$(this).fadeTo(500, 1, fadeText()).delay(3000);	
		});
	}

	setTimeout(fadeText, 3000)
});
