import options from './calculator.json'

(() => {
	let $select = $('.calculator__material-select');
	let $space = $('.calculator__workspace');
	let $setPrice = $('.calculator__left-price-new').children('span');
	let $acttionPrice = $('.calculator__left-price-old').children('span');
	let $getSizes = $('.calculator__size-width, .calculator__size-height').children('input');

	let $getWidth = $('.calculator__size-width input');
	let $getHeight = $('.calculator__size-height input');

	// Главная функция отрисовки блоков с инпутами
	let render = function (deps, current) {
		if (!$select.length) return;

		let html = '';
		deps = deps || $select.find(':selected').data('deps').split(',');
		//console.log(deps);


		deps.forEach(function (dep, index) {
			dep = dep.trim();
			html += `<div class="properties__block">
				<h3 class="properties__title">${options[dep].title ?? ''}</h3>
				<div class="properties__items">`;

			for (const input in options[dep]) {



				if (input !== 'title') {
					let inp = options[dep][input];
					html += `<label class="properties__item">
						<input type="${inp.type}" value="${inp.value}" name="${dep}" ${inp.checked} data-deps="${inp.deps ?? ''}">
						<img src="./images/${inp.img}" alt="">
						<span>${inp.label ?? ''}</span>
					</label>`;
				}
			}

			if (!dep.includes('empty') && !dep.includes('baget_')) {
				html += `<a class="properties__item properties__item_help" href="./" data-modal="${dep}"></a>`;
			}

			html += `</div></div>`;

		});



		if (current) {
			current.nextAll().remove();
			current.after(html);
		} else {
			$space.empty().append(html);
		}
	}

	let countPrice = (width, height) => {

		let total = 0;

		width = width || $('.calculator__size-width input').val();
		height = height || $('.calculator__size-height input').val();

		let widthAndHeight = width * height;

		total += widthAndHeight;

		total += +$('select[name="materials"]').val() * widthAndHeight;

		//console.log(total);
		$space.find('input:checked').each(function () {

			total += +$(this).val();

		});
		$setPrice.html(total);
		let getPrice = total * 0.2;
		$acttionPrice.html(total - getPrice);
	};

	let proportionalSizes = (width) => {

		if ($('#proportional:checked').length) {

			if (width) {
				//console.log("width");
				$getHeight.val(Math.floor($getWidth.val() * 1.5));
			} else {
				//console.log("height");
				$getWidth.val(Math.floor($getHeight.val() / 1.5));
			}
		}
	};

	$getSizes.on('change', function () {
		let $self = $(this);
		if ($self.parent().attr('class').includes('width')) {

			proportionalSizes(true);

			countPrice($self.val(), false);


		} else {

			proportionalSizes();

			countPrice(false, $self.val());
		};
	});

	// Обработчик на селект
	$select.on('change', 'select', function (e) {
		render();
		countPrice();
	});

	// Обработчик на все чекбоксы и радиокнопки
	$space.on('change', 'input[type="checkbox"], input[type="radio"]', function (e) {
		let $self = $(this);
		let deps = $self.data('deps');

		if (deps) {
			render(deps.split(','), $self.parents('.properties__block'));
		}
		countPrice();
	});

	// Вызывается в первую очередь
	render();
	countPrice();
})();
