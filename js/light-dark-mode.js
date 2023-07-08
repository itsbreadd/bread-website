import particles from '../particles.json' assert { type: 'json' };
import particlesDark from '../particles-dark.json' assert { type: 'json' };
$(document).ready(function() {
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		localStorage.theme = 'dark';
	    document.documentElement.classList.add('dark');
	    $('.switch input').prop('checked', true);
	    if (typeof particlesJS != 'undefined') {
			particlesJS("particle-overlay", particlesDark);
		}
	} else {
	    document.documentElement.classList.remove('dark');
	    if (typeof particlesJS != 'undefined') {
			particlesJS("particle-overlay", particles);
		}
	    $('.dark-mode-icon').removeClass("fa-moon");
	    $('.dark-mode-icon').addClass("fa-sun");
	}

	$('.switch input').change(function() {
		if (localStorage.theme === 'dark') {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
			if (typeof particlesJS != 'undefined') {
				particlesJS("particle-overlay", particles);
			}
		} else {
		    localStorage.theme = 'dark';
		    document.documentElement.classList.add('dark');
		    if (typeof particlesJS != 'undefined') {
				particlesJS("particle-overlay", particlesDark);
			}
		}
		$('.dark-mode-icon').toggleClass("fa-sun");
		$('.dark-mode-icon').toggleClass("fa-moon");
	});
});
