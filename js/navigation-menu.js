$(document).ready(function() {
	let menuOpen     = $('.experience-menu-open'),
		menuClose    = $('.experience-menu-close'),
		menuToggle   = $('.menu-toggle'),
		navContainer = $('.navigation-menu');

	/* Hide/ Show Menu */
	menuToggle.click(function () {
		if (navContainer.attr('data-dropped') === 'false') {
			navContainer.attr('data-dropped', 'true');
			menuOpen.fadeOut();
			menuClose.fadeIn();
			navContainer.fadeIn();
			return;
		}
		closeNav();
	});

	/* Close Menu On Scroll */
	window.addEventListener("scroll", function () {
		if (navContainer.attr('data-dropped') === 'true') {
			closeNav();
		}
	});

	/* Close Menu On Click Outside*/
	$(document).click(function(e) { 
	  if(navContainer.attr('data-dropped') === 'true' &&
	  	!$(e.target).closest('.navigation-menu').length &&
	  	!$(e.target).closest('header').length) {
	  	closeNav();
	  }        
	});

	/* Close Menu */
	function closeNav() {
		navContainer.attr('data-dropped', 'false');
		menuOpen.fadeIn();
		menuClose.fadeOut();
		navContainer.fadeOut();
	};
});
