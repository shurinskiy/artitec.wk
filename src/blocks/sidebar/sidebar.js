(() => {

	$menu = $('.header__side-top');
	$sidebar = $('.sidebar');

	$('.sidebar__toggle').on('click', function(e) {
		$sidebar.toggleClass('opened');
		$menu.removeClass('opened');
	})

	$(window).on('click', function(e) {
		if($sidebar.hasClass('opened') && !e.target.closest('.sidebar')) {
			e.preventDefault();
			$sidebar.toggleClass('opened');
		}
	});

})();