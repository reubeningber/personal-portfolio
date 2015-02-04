$(document).ready(function() {	
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

	// Cool Share 

    var url = 'http://reubeningber.com',
        options = {
            twitter: {
                text: '@ReubenIngber Is a front end web developer looking for full time or freelance opportunities',
                via: 'reubeningber'
            },

            facebook : true,
            googlePlus : true
        };

    $('.js-social').shareButtons(url, options);

});
