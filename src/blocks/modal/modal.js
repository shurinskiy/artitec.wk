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
	
	$(`[data-${cls}]`).on('click', open);
	
	$modal.on('click', `[data-${cls}]`, open);
	
	$(`.${cls}__close`).on('click', close);

	$(window).on('click', function(e) {
		if (e.target == $modal[0]) close(e);
	});




})();