import options from './calculator.json'

(() => {
	let $select = $('.calculator__material-select');
	let $space = $('.calculator__workspace');

	// Главная функция отрисовки блоков с инпутами
	let render = function(deps, current) {
		if(!$select.length) return;

		let html = '';
		deps = deps || $select.find(':selected').data('deps').split(',');
		// console.log(deps);

		deps.forEach(function(dep, index) {
			dep = dep.trim();
			html += `<div class="properties__block">
				<h3 class="properties__title">${options[dep].title ?? ''}</h3>
				<div class="properties__items">`;
				
			for (const input in options[dep]) {
				if (input !== 'title') {
					let inp = options[dep][input];
				
					html += `<label class="properties__item">
						<input type="${inp.type}" name="${dep}" ${inp.checked} data-deps="${inp.deps ?? ''}">
						<img src="./images/${inp.img}" alt="">
						<span>${inp.label ?? ''}</span>
					</label>`;
				}
			}

			html += `</div></div>`;
		});

		if(current) {
			current.nextAll().remove();
			current.after(html);
		} else {
			$space.empty().append(html);
		}
	}
	
	// Обработчик на селект
	$select.on('change', 'select', function(e) {
		render();
	});

	// Обработчик на все чекбоксы и радиокнопки
	$space.on('change', 'input[type="checkbox"], input[type="radio"]', function(e) {
		let $self = $(this); 
		let deps = $self.data('deps');

		if(deps)
			render(deps.split(','), $self.parents('.properties__block'));
	});

	// Вызывается в первую очередь
	render();
})();
