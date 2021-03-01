import 'owl.carousel';

(() => {

	$('.gallery__items').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: true,
		nav: true,
		navText: ['', ''],
		navContainer:	'.gallery__nav',
		dotsContainer:	'.gallery__dots',
		navClass: ['gallery__btn gallery__btn_prev', 'gallery__btn gallery__btn_next'],
		dotClass: 'gallery__dot',
		onInitialized: makeThumb
	 });

	 function makeThumb(e) {
		let $items = $(e.target).find('.owl-item');
		let $dots = $(e.target).next('.gallery__nav').find('.gallery__dot');

		$items.each(function(index) {
			$dots.eq(index).css({
				'background': `url(${$(this).find('img').attr('src')})`,
				'background-size': 'cover'
			})
		})
	}

})();
