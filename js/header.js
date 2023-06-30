$(document).ready(function() {
	let header                    = $('header');
    let currentScroll             = 0;
    const scrollDownThreshold     = 400;
    const scrollUpThreshold       = 200;
    let currentScrollUpDistance   = 0;
    let currentScrollDownDistance = 0;

    $(window).scroll(function(e) {
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPos > currentScroll) {
            // Scrolling down
            currentScrollDownDistance += scrollPos - currentScroll;

            if (!header.hasClass('header-visible') && currentScrollDownDistance >= scrollDownThreshold) {
            	// Reset current scroll up distance
            	currentScrollUpDistance = 0;
	            header.slideUp(200);
	            header.addClass('header-visible');
            }
        } else if (scrollPos < currentScroll) {
            // Scrolling up
            currentScrollUpDistance += currentScroll - scrollPos;

            if (header.hasClass('header-visible') && currentScrollUpDistance >= scrollUpThreshold) {
            	// Reset current scroll down distance
            	currentScrollDownDistance = 0;
                header.slideDown(200);
                header.removeClass('header-visible');
            }
        }

        currentScroll = scrollPos;
    });
});