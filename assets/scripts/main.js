const onReady = function () {
  setSliders();
  setShelf();
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

const setShelf = function () {

  const template = `
    <section class="shelf">
      <div class="shell">
        <h2 class="shelf__title"> <span>Instrumentos</span> <strong>destaque</strong> </h2>
        <p class="shelf__description">it is a long established fact that a reader will be distracted by the readable</p>
        <ul class="shelf__list">
          <li class="shelf__item" v-for="product in products">
            <a href="javascript:void(0);" :title="product.productName">
              <div class="product__image">
                <div class="product__gradient"></div>
                <img :src="product.photo" :alt="product.productName" />
                <button class="product__quickview">
                  <label> <span class="icon-lupa"></span> </label>
                  <span>Quick view</span>
                </button>
              </div>
              <h3 class="product__title">{{ product.productName }}</h3>
              <p class="product__description">{{ product.descriptionShort }}</p>
              <strong class="product__price">R$ {{ String( product.price.toFixed(2) ).replace('.', ',') }}</strong>
            </a>
          </li>
        </ul>
        <a class="shelf__button" href="javascript:void(0);">Ver mais</a>
      </div>
    </section>
  `;

  Vue.component('shelf-component', {
    
    template: template,

    data: function () {

      return {
        products: []
      };
    },

    created: function () {
      
      const _self = this;
      const endpoint = `https://raw.githubusercontent.com/vseles/teste-front-end/master/produtos.json`;

      $.getJSON( endpoint, function ( response ) {
        if ( response && response.length > 0 )
          _self.products = response;
        else
          alert('Não foi possível consultar os produtos.');
      });
    }
  });

  new Vue({ el: '#shelf-component' });
};

$(document).ready( onReady );