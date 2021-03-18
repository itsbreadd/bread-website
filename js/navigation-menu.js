$(document).ready(function() {
	let menuOpen = $('#experience-menu-open'),
		menuClose = $('#experience-menu-close'),
		menuToggle = $('#menu-toggle'),
		navContainer = $('#navigation-menu');

		

	menuToggle.click(function () {
		if (navContainer.attr('data-dropped') === 'false') {
			navContainer.attr('data-dropped', 'true');
			menuOpen.fadeOut();
			menuClose.fadeIn();
			navContainer.slideDown();
			return;
		}

		navContainer.attr('data-dropped', 'false');
		menuOpen.fadeIn();
		menuClose.fadeOut();
		navContainer.slideUp();
	})
});
