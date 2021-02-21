import 'owl.carousel';

(() => {

	$('.manufacture__slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: false,
		nav: true,
		navText: ['',''],
		navClass: ['manufacture__prev','manufacture__next']
	});
	
})();
