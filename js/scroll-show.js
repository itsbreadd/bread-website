$(document).ready(function() {
	let sections 	  = $('section');
	let sectionsState = {};
	let backToTopBtn  = $('.back-to-top');

	sections.each(function(index, element) {
		sectionsState[index] = {
			element: element,
			rendered: false
		}
	});

	function isInViewport(element) {
		var elementTop 	   = $(element).offset().top;
		var elementBottom  = elementTop + $(element).outerHeight();
		var viewportTop    = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	}

	handleBackToTop();
	renderSections();

	function renderSections() {
		$.each(sectionsState, function(index, section) {
			if (section.rendered === false) {
			    if (isInViewport(section.element)) {
			    	$(section.element).animate({opacity: 1}, 1000);
			    	section.rendered = true;
			    }
			}
		});
	}

	function handleBackToTop() {
		if ($(window).scrollTop() > 50) {
			backToTopBtn.fadeIn(200);
		} else {
			backToTopBtn.fadeOut(200);
		}
	}

	$(window).on('resize scroll', function() {
		handleBackToTop();
		renderSections();
	});

	backToTopBtn.click(function() {
		document.body.scrollTop = 0;
  		document.documentElement.scrollTop = 0;
	});
});