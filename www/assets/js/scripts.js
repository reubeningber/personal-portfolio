$(document).ready(function() {
	// var $container = $('#project-container');
	
	// $container.masonry({
	// 	columnWidth: 60,
	// 	itemSelector: '.project-item',
	// 	gutter: 10
	// });
	
	var $container = $('#project-container').masonry();
	// layout Masonry again after all images have loaded
	$container.imagesLoaded( function() {
		$container.masonry({
			gutter: 10,
			itemSelector: '.project-item'
		});
	});

	$('.popup-link').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});
});
