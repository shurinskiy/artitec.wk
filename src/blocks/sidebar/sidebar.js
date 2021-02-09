(() => {

	$menu = $('.header__side-top');
	$sidebar = $('.sidebar');

	$('.sidebar__toggle').on('click', function(e) {
		$sidebar.toggleClass('opened');
		$menu.removeClass('opened');
	})

})();