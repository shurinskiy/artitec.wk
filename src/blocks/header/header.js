(() => {
	
	$menu = $('.header__side-top');
	$sidebar = $('.sidebar');

	$('.header__menu-open, .header__menu-close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$menu.toggleClass('opened');
		$sidebar.removeClass('opened');
	})

	$(window).on('click', function(e) {
		let target = e.target.classList;

		if($menu.hasClass('opened') && 
			!target.contains('header__tel') && 
			!target.contains('header__social-item') && 
			!target.contains('header__navi-item')) {
				$menu.toggleClass('opened');
			}
	});

})();
