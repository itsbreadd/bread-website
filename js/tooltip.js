$(document).ready(function() {
	let socialLinks = $('.social-links > a');

	socialLinks.hover(function() {
		let centerX = $(this).offset().left + $(this).width() / 2;

		$('<div class="tooltip" style="display: none;">' + this.title + '</div>').insertBefore(this)
			.css({
				"left": centerX - 40
			}).fadeIn(200);
	},
	
	function() {
		$('.tooltip').fadeOut(200, function () {
			$('.tooltip').remove();
		});
	});
});