import 'owl.carousel';

(() => {

	$('.detail__slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['detail__slider-btn detail__slider-btn_prev', 'detail__slider-btn detail__slider-btn_next']
	});

})();



