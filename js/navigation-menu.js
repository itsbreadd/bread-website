$(document).ready(function() {
	let menuToggle   = $('#menu'),
		navContainer = $('.navigation-menu');

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
		navContainer.fadeOut();
	};
});
