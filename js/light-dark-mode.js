$(document).ready(function() {
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		localStorage.theme = 'dark';
	    document.documentElement.classList.add('dark');
	} else {
		$('.switch input').prop('checked', true);
	    document.documentElement.classList.remove('dark');
	    $('.dark-mode-icon').removeClass("fa-moon");
	    $('.dark-mode-icon').addClass("fa-sun");
	}

	$('.switch input').change(function() {
		if (localStorage.theme === 'dark') {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		} else {
		    localStorage.theme = 'dark';
		    document.documentElement.classList.add('dark');
		}
		$('.dark-mode-icon').toggleClass("fa-sun");
		$('.dark-mode-icon').toggleClass("fa-moon");
	});
});
