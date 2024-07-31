import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

// const swiper =
new Swiper('.reviews__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  modules: [Navigation, Pagination],
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  slidesPerView: 1,
  spaceBetween: 10,
});
