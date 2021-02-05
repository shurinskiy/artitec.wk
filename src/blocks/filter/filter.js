(() => {
	// Если элементов больше пяти - лишние спрятать
	$('.filter__items').each(function() {
		let $el = $(this).find('.filter__item');

		if($el.length > 4) {
			$(this).append("<span class='filter__more'>показать все</span>");

			$el.each(function(index) {
				if(index > 3)
					$(this).css({display: "none"});
			});
		}
	});

	// Показать спрятанные и убрать кнопку
	$('.filter').on('click', '.filter__more', function() {
		$(this)
			.parent('.filter__items')
			.find('.filter__item')
			.css({display: 'block'})
			.end().end()
			.remove();
	});
	


})();
