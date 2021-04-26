const onReady = function () {
  setSliders();
};

const setSliders = function () {

  // Banners Slider
  $('#banners__slider').slick({
    speed: 300,
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('#banners__controls'),
    appendDots: $('#banners__controls')
  });

  // Brands Slider
  $('#brands__slider').slick({
    speed: 300,
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('#brands__controls')
  });

  // Testimonial Slider
  $('#testimonial__slider').slick({
    speed: 300,
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('#testimonial__controls')
  });
};

$(document).ready( onReady );