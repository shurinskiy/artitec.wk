(() => {

	$('.detail__slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['detail__slider-btn detail__slider-btn_prev', 'detail__slider-btn detail__slider-btn_next']
	});

})();

if ($("properties__item").children("input:checked")) {
	$("#glass-test").css("display", "none");
	$("#pasportu-test").css("display", "none");
}


$(".properties__items").on("click", "label", function () {
	let attr = $(this).data("type");
	if (attr == "studio") {

		$("#glass-test").css("display", "none");
		$("#baget-test").css("display", "none");
		$("#pasportu-test").css("display", "none");

	} else if (attr == "standart") {

		$("#baget-test").css("display", "block");

	} else if (attr == "baget-enable") {

		$("#pasportu-test").css("display", "block");
		$("#glass-test").css("display", "block");

	} else if (attr == "baget-empty") {
		$("#pasportu-test").css("display", "none");
		$("#glass-test").css("display", "none");
	}
})



