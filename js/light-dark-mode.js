$(document).ready(function() {
	let darkModeValue = localStorage.getItem("dark");

	// Dark mode is active.
	if (darkModeValue === '1') {
		$('html').toggleClass("inversed");

		$('.dark-mode-icon').toggleClass("fa-moon");
		$('.dark-mode-icon').toggleClass("fa-sun");
		$('.switch input').prop('checked', true);
	}

	$('.switch input').change(function() {
		if (+window.localStorage.getItem("dark")) {
			window.localStorage.setItem("dark", 0);
		} else {
		    window.localStorage.setItem("dark", 1);
		}
		$('html').toggleClass("inversed");
		$('.dark-mode-icon').toggleClass("fa-moon");
		$('.dark-mode-icon').toggleClass("fa-sun");
	});
});