$(document).ready(function() {
	let sections 	  = $('section');
	let sectionsState = {};

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

	$(window).on('resize scroll', function() {
		renderSections();
	});
});