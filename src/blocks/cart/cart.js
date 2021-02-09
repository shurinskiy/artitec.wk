(() => {

   $('.cart__slider').owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      dots: true,
      nav: true,
      navText: ['', ''],
      navContainer: '.cart__slider',
      navClass: ['cart__slider-btn-left', 'cart__slider-btn-right']
   });

   $('.cart__right-slider.one').owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      dots: false,
      nav: true,
      navText: ['', ''],
      navContainer: '.cart__right-slider.one',
      navClass: ['cart__left-slider-btn', 'cart__right-slider-btn']
   });
   $('.cart__right-slider.two').owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      dots: false,
      nav: true,
      navText: ['', ''],
      navContainer: '.cart__right-slider.two',
      navClass: ['cart__left-slider-btn', 'cart__right-slider-btn']
   });
   $('.cart__right-slider.three').owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      dots: false,
      nav: true,
      navText: ['', ''],
      navContainer: '.cart__right-slider.three',
      navClass: ['cart__left-slider-btn', 'cart__right-slider-btn']
   })

   $('.modal__popup-close').click(function () {
      $(this).parents('.modal__fade').fadeOut();
      return false;
   });

})();



