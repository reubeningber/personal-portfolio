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
		type: 'inline',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		// image: {
		// 	verticalFit: true
		// },
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});

	// FitText 
	// Add class js-fit-text & Set the following data-attributes: data-fit-compressor="<compressor value>" data-fit-max-font-size=<size>px" data-fit-min-font-size="<size>px" 
    $('.js-fittext').each(function() {
        var $this = $(this),
            fitCompressor = $this.data('fit-compressor') || 1,
            fitMaxFontSize = $this.data('fit-max-font-size') || Number.POSITIVE_INFINITY,
            fitMinFontSize = $this.data('fit-min-font-size') || Number.NEGATIVE_INFINITY;
 
            $this.fitText(fitCompressor, {maxFontSize: fitMaxFontSize, minFontSize: fitMinFontSize});
    });
});
