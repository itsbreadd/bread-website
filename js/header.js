$(document).ready(function() {
	let header                    = $('header');
	let navControl                = $('.nav-control');
    let currentScroll             = 0;
    const scrollDownThreshold     = 400;
    const scrollUpThreshold       = 200;
    let currentScrollUpDistance   = 0;
    let currentScrollDownDistance = 0;
    const delay                   = 1000;


    // Set height of nav control and animate it into the page
    let headerHeight = header.height();
    navControl.height(headerHeight);
    navControl.show('slide', {
		direction: 'right',
		easing: 'easeOutBounce'
	}, delay);

	// Set inital current scroll
	var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
	currentScroll = scrollPos;

	// Add delay so nav control animation can finish before menu is allowed to disappear
	setTimeout(function() {
	    $(window).scroll(function(e) {
	        var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

	        if (scrollPos > currentScroll) {
	            // Scrolling down
	            currentScrollDownDistance += scrollPos - currentScroll;

	            if (!header.hasClass('header-hidden') && currentScrollDownDistance >= scrollDownThreshold) {
	            	// Reset current scroll up distance
	            	currentScrollUpDistance = 0;
		            header.slideUp(200);
		            navControl.slideUp(200);
		            header.addClass('header-hidden');
	            }
	        } else if (scrollPos < currentScroll) {
	            // Scrolling up
	            currentScrollUpDistance += currentScroll - scrollPos;

	            if (header.hasClass('header-hidden') && currentScrollUpDistance >= scrollUpThreshold) {
	            	// Reset current scroll down distance
	            	currentScrollDownDistance = 0;
	                header.slideDown(200);
	                navControl.slideDown(200);
	                header.removeClass('header-hidden');
	            }
	        }

	        currentScroll = scrollPos;
	    });
	}, delay);
});