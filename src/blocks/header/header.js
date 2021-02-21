(() => {
	
	$menu = $('.header__side-top');
	$sidebar = $('.sidebar');

	$('.header__menu-open, .header__menu-close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$menu.toggleClass('opened');
		$sidebar.removeClass('opened');
	});

	$(window).on('click', function(e) {
		if($menu.hasClass('opened') && !e.target.closest('.header__side-top')) {
			e.preventDefault();
			$menu.toggleClass('opened');
		}
	});

})();
