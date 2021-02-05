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
			960:	{ 
				items: 5,
			},
			640:	{ 
				items: 4,
			},
			0:	{ 
				items: 3,
			}
		}
	});

})();
