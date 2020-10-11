import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    img: {
      desktop: [
        'skyscrapers-desktop',
        'skyscrapers-desktop',
        'skyscrapers-desktop',
      ],
      tablet: [
        'skyscrapers-tablet',
        'skyscrapers-tablet',
        'skyscrapers-tablet',
      ],
      mobile: [
        'skyscrapers-mobile',
        'skyscrapers-mobile',
        'skyscrapers-mobile',
      ],
     },

    imgCaption: [
      'Подпись к блоку может быть опциональной. Можно вводить различные сноски и ссылки для  блоков с фотографиями и видео',
      'Подпись к блоку может быть опциональной. Можно вводить различные сноски и ссылки для  блоков с фотографиями и видео',
      'Подпись к блоку может быть опциональной. Можно вводить различные сноски и ссылки для  блоков с фотографиями и видео',
    ],

    accordion: [
      {
        title: 'уникальные виды',
        subTitle: 'Прекрасный вид',
        description: 'Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация» доставляют 67 самых современных лифтов.',
      },
      {
        title: 'панорамные окна',
        subTitle: 'Настоящие панорамы',
        description: 'Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация» доставляют 67 самых современных лифтов.',
      },
      {
        title: 'высокие потолки',
        subTitle: 'Простор для идей',
        description: 'Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация» доставляют 67 самых современных лифтов.',
      },
      {
        title: 'приватность',
        subTitle: 'VIP-безопасность',
        description: 'Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация» доставляют 67 самых современных лифтов.',
      },
    ],
  },

  getters: {
    images: state => {
      return state.img;
    },

    imagesCaptions: state => {
      return state.imgCaption;
    },

    accordionInfo: state => {
      return state.accordion;
    }
  },

  mutations: {

  },

  actions: {

  },
});
