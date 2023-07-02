$(document).ready(function() {
	let menuToggle   = $('#menu'),
		navContainer = $('.navigation-menu'),
		navLinks     = $('.menu-item');

	/* Hide/ Show Menu */
	menuToggle.change(function () {
		if (navContainer.attr('data-dropped') === 'false') {
			navContainer.attr('data-dropped', 'true');
			navContainer.fadeIn();
			return;
		}
		closeNav();
	});

	/* Close Menu On Scroll */
	window.addEventListener("scroll", function () {
		if (navContainer.attr('data-dropped') === 'true') {
			/* Close Anim On Scroll If Open */
			resolveMenuAnimation();
			closeNav();
		}
	});

	navLinks.click(function (element) {
		resolveMenuAnimation();
		closeNav();
	});

	/* Will Change Menu Icon Back To Cross If Closed */
	function resolveMenuAnimation() {
		if (menuToggle.is(':checked')) {
			menuToggle.prop('checked', false);
		}
	}

	/* Close Menu */
	function closeNav() {
		navContainer.attr('data-dropped', 'false');
		navContainer.fadeOut();
	};
});
