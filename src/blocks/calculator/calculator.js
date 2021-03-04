import options from './calculator.json'

(() => {
	let $select = $('select[name="materials"]');
	let $space = $('.calculator__workspace');
	let $price = $('.calculator__total').find('p:first-child span');
	let $price_old = $('.calculator__total').find('p:last-child span');
	let $size_fields = $('input.calculator__sizes-input');
	let $width_field = $('input.calculator__sizes-input[name="width"]');
	let $height_field = $('input.calculator__sizes-input[name="height"]');
	let $fixed_sizes = $('select[name="fixed_sizes"]');
	
	
	// Главная функция отрисовки блоков с инпутами
	let render = (deps, current) => {
		if (!$select.length) return;
		
		let html = '';
		deps = deps || $select.find(':selected').data('deps').split(',');

		deps.forEach((dep, index) => {
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
				html += `<a class="properties__item help" href="./" data-modal="${dep}"></a>`;
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

	// Подсчет общей стоимости с учетом выбранных вариантов
	let priceCount = (width, height) => {
		let total = 0;

		width = width || $width_field.val() || $fixed_sizes.val().split(',')[0];
		height = height || $height_field.val() || $fixed_sizes.val().split(',')[1];

		total += (width * height);
		total += +$('select[name="materials"]').val() * width * height;

		$space.find('input:checked').each(function () {
			total += +$(this).val();
		});

		$price.text(total);
		$price_old.text(total - (total * 0.2));
	};

	// Сохранять пропорции холста при отмеченной галочке
	let setRateable = (width) => {
		if ($('input[name="rateable"]:checked').length) {
			if (width) {
				$height_field.val(Math.floor($width_field.val() * 1.5));
			} else {
				$width_field.val(Math.floor($height_field.val() / 1.5));
			}
		}
	};

	// Обработчик на поля ввода размеров
	$size_fields.on('change input', function(e) {
		let $self = $(this);

		if ($self.attr('name') == 'width') {
			setRateable(true);
			priceCount($self.val(), false);
		} else {
			setRateable();
			priceCount(false, $self.val());
		};
	});

	// Обработчик на селект
	$select.on('change', function (e) {
		render();
		priceCount();
	});

	// Обработчик на селект с фиксированными размерами
	$fixed_sizes.on('change', function (e) {
		render();
		priceCount();
	});

	// Обработчик на все чекбоксы и радиокнопки вариантов
	$space.on('change', 'input[type="checkbox"], input[type="radio"]', function (e) {
		let $self = $(this);
		let deps = $self.data('deps');

		if (deps) {
			render(deps.split(','), $self.parents('.properties__block'));
		}

		priceCount();
	});

	// Вызывается в первую очередь
	render();
	priceCount();
})();
