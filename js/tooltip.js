$(document).ready(function() {
	let socialLinks = $('.social-links a');

	socialLinks.hover(function() {
		let centerX = $(this).offset().left + $(this).width() / 2;

		$('<div class="tooltip">' + this.title + '</div>').insertBefore(this)
			.css({
				"left": centerX - 40
			});
	},
	
	function() {
		$('.tooltip').remove();
	});
});