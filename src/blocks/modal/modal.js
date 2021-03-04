import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {
	let cls = 'modal';


	/* Модальное окошко */
	$(`<div id='${cls}__underlay' class='${cls}'>
		<div class='${cls}__body'>
			<span class='${cls}__close'></span>
			<div class='${cls}__content' data-scroll-lock-scrollable></div>
		</div>
	</div>`).appendTo($('body'));

	let $modal = $(`#${cls}__underlay`);

	let close = function(e) {
		e.preventDefault();
		enablePageScroll();

		$modal
			.attr('class', `${cls}`)
			.find(`.${cls}__content`)
			.empty()
			.end()
			.hide();
	}

	let open = function(e) {
		e.preventDefault();
		disablePageScroll();
		
		if ($modal.is(":visible")) close(e);
		let id = $(this).data('modal') || 'error';

		$modal
			.addClass(`${cls}_${id}`)
			.find(`.${cls}__content`)
			.html($('#' + id).html())
			.end()
			.fadeIn();
	}
	
	// Открыть модальное окно
	$(`[data-${cls}]`).on('click', open);
	// Открыть модальное окно из уже открытого окна
	$modal.on('click', `[data-${cls}]`, open);
	// Открыть модальное окно из динамического контента блока properties
	$('.properties').on('click', `[data-${cls}]`, open);
	// Закрыть окошко
	$(`.${cls}__close`).on('click', close);
	// Закрыть по клику мимо окошка или esc
	$(window).on('click keyup', function(e) {
		if (e.target == $modal[0] || e.which == 27) close(e);
	});


	// Загрузка видео с youtube
	$modal.on('click', '.modal__video-play', function(e) {
		let $self = $(this);

		$self
		.parent('.modal__video')
		.find('iframe')
		.attr('src', $self.data('youtubeSrc'))
		.end()
		.end()
		.fadeOut();
	});

})();