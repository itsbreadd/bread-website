$(document).ready(function() {
	let menuBtn = $('#experience-burger-menu'),
		navContainer = $('#navigation-menu');

	menuBtn.click(function () {
		if (navContainer.attr('data-dropped') === 'false') {
			navContainer.attr('data-dropped', 'true');
			navContainer.slideDown();
			return;
		}

		navContainer.attr('data-dropped', 'false');
		navContainer.slideUp();
	})
});
