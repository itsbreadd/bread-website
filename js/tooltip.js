$(document).ready(function() {
	let socialLinks = $('.social-links > a');

	socialLinks.hover(function(el) {
		let centerX   = $(this).offset().left + $(this).width() / 2;
		let title     = this.title.toLowerCase();
		
		$(`<div class="tooltip ${title} bg-black text-white dark:bg-white dark:text-black opacity-90" style="display: none;">` + this.title + '</div>')
			.insertBefore(this).css({"left": centerX - 40}).fadeIn(200);
	},
	
	function() {
		let title   = this.title.toLowerCase();
		let titleEl = $(`.${title}`);
		titleEl.fadeOut(200, function () {
			titleEl.remove();
		});
	});
});