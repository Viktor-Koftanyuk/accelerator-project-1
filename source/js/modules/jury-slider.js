import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/keyboard';
import { Keyboard } from 'swiper/modules';

// const swiper =
new Swiper('.juri__swiper', {

  direction: 'horizontal',
  loop: true,

  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.juri__button--next',
    prevEl: '.juri__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      spaceBetween: 40,
      slidesPerView: 'auto',
    },

    1366: {
      slidesPerView: 'auto', //4
      spaceBetween: 40,
      touchRatio: 0,
    }
  },
});
