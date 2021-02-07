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

})();



// (() => {
//    $('.cart__right-slider').owlCarousel({
//       loop: true,
//       items: 1,
//       margin: 0,
//       dots: false,
//       nav: true,
//       navText: ['', ''],
//       navContainer: '.cart__right-slider',
//       navClass: ['cart__right-slider-btn', 'cart__right-slider-btn']
//    })
// })();