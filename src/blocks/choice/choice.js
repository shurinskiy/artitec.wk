import 'owl.carousel';

(() => {

	$('.choice__items').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: true,
		navText: ['',''],
		navContainer: '.choice__items',
		navClass: ['choice__prev','choice__next'],
		responsive:{
			1100:	{ 
				items: 5,
			},
			960:	{ 
				items: 4,
			},
			740:	{ 
				items: 3,
			},
			500:	{ 
				items: 2,
			},
			0:	{ 
				items: 1,
			}
		}
	});

})();
