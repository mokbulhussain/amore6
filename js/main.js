
(function ($) {
  "use strict";



$('.client').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  

  

})(jQuery);	   