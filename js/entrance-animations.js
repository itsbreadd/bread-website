$(document).ready(function() {
	let socialLinks = $('.social-links');

	socialLinks.children().each(function (index, child) {
		setTimeout(function() {
			$(child).addClass('scale');
		}, 100 * index);

		setTimeout(function() {
			$(child).removeClass('scale');
		}, (100 * index) + 200);
	});
});