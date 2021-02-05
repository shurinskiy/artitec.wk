(() => {

	$('.categories__item h3').on('click', function(e) {
		$(this)
			.next('.categories__subitems')
			.slideToggle();
	})

})();
