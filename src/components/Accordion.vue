<template>
  <section class="accordion">
    <div class="swiper-container slider-two">

    <div class="swiper-wrapper accordion_container">
      <div v-for="(item, i) in data"
           class="swiper-slide accordion_item"
           :class="items[i].open ? 'open' : items[i].close "
           :key="i"
           @click="onClick(i)"
      >
        <div class="accordion_item-hover"></div>
        <button class="accordion_button"></button>
        <h3 class="accordion_title">{{ item.title }}</h3>
        <h2 class="accordion_sub-title">{{ item.subTitle }}</h2>
        <p class="accordion_description">{{ item.description }}</p>
      </div>
    </div>

    <div class="swiper-pagination"></div>
</div>
  </section>
</template>

<script>
  import Swiper from 'swiper/swiper-bundle';
  import 'swiper/swiper-bundle.css';
  import mocks from '../mocks/mock';


  export default {
    data() {
      return {
        data: mocks.accordion,
        items: [],
      }
    },

    methods: {
      onClick(i) {
        if(this.items[i].open) {
          for (let item of this.items) {
            item.open = false;
            item.close = 'initial'
          }
          this.items[i].open = false;
        } else if (!this.items[i].open) {
          for (let item of this.items) {
            item.open = false;
            item.close = 'close'
           }
          this.items[i].open = true;
        }
      }
    },

    beforeMount() {
      for (let i = 0; i < this.data.length; i++) {
        this.items.push({
          open: false,
          close: '',
        })
      }
    },
  
    mounted() {
      let mobile = window.matchMedia("(max-width: 550px)");

      let options = {
        el: '.slider-two',
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }

      let sliderTwo = false;

      const initSliderMobile = (mobile) => {
        if(mobile.matches) {
          sliderTwo = new Swiper(options)
        } else {
          if(sliderTwo) {
            sliderTwo.destroy();
          }
        }
      }
  
      initSliderMobile(mobile);
      mobile.addListener(initSliderMobile);

    },
  }
</script>

<style lang="scss">
  @import "../sass/global.scss";

  @media (min-width: 550px) {
    .accordion_item-hover {
      position: absolute;
      z-index: 11;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      &:hover {
        background-color: #fff;
        opacity: 0.2;
      }
    }
  }

  .accordion {
    min-height: 720px;

    font-family: $noto-font;
    color: $white;

    background-image: url('/img/alley-desktop@1x.jpg');
    background-repeat: no-repeat;
    background-position: center;

    @media (min-resolution: $retina-dpi), (min-resolution: $retina-dppx) {
      background-image: url("/img/alley-desktop@2x.jpg");
      background-repeat: no-repeat;
      background-size: 1440px auto;
      background-position: center 0;;
    }

    &_item {
      position: relative;

      display: flex;
      flex-direction: column;
      flex-shrink: 1;
      justify-content: flex-end;
      align-items: center;
      min-height: 720px;
      padding-bottom: 50px;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;

        width: 1px;
        height: 100%;
        background-color: $white;
        opacity: 0.6;
      }

      &:last-of-type::after {
        display: none;
      }
    }

    &_button {
      position: relative;

      display: block;
      width: 19px;
      height: 19px;

      background-color: transparent;
      border: none;

      &::before,
      &::after {
        content: '';
        position: absolute;
        background-color: $white;
      }

      &::before {
        top: 9px;
        left: 0;

        width: 100%;
        height: 1px;
      }

      &::after {
        top: 0;
        left: 9px;


        width: 1px;
        height: 100%;
      }
    }

    &_title {
      text-align: center;

      font-family: $noto-font;
      font-weight: 300;
      font-size: 14px;
      line-height: 25px;
      letter-spacing: -0.02em;
      text-transform: uppercase;
    }

    &_sub-title {
      text-align: center;

      font-family: $noto-font;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: -0.01em;
    }

    &_description {
      position: absolute;
      z-index: -999;


      width: 280px;
      margin-bottom: -100vh;
      text-align: center;

      opacity: 0;

      font-weight: 300;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.01em;
    }

  }


// animation classes desktop
  @media (min-width: 769px) {
    .open {

      justify-content: center;

      .accordion_item-hover {
        display: none;
      }

      .accordion_title {
        margin-top: 100px;
      }

      .accordion_sub-title {
        max-width: 150px;
        text-align: center;
      }

      .accordion_button {
        transform: translate(0, -50px)
                   rotate(135deg)
                   scale(1.3);
        transition: all 0.8s ;
      }

      .accordion_description {
        position: static;
        z-index: 1;

        margin-top: 30px;
        margin-bottom: 0;

        opacity: 1;
        transition: all 0.5s ;
      }

      flex-grow: 1 !important;
      transition: all 0.3s ;
    }

    .close {
      position: relative;
      justify-content: center;

      .accordion_title {
        white-space: nowrap;
        transform: rotate(-90deg);
        transition: 0.3s;
      }

      .accordion_button {
        display: none;
      }

      .accordion_sub-title {
        display: none;
      }

      width: 50px !important;
      transition: all 0.3s ;
    }

    .initial {
      .accordion_button {
        transition: all 0.3s ;
      }

      .accordion_title {
        transition: all 0.3s;
      }

      transition: all 0.3s ;
    }
  }


    @media (min-width: 551px) and (max-width: 768px) {
      .accordion {
        min-height: 720px;

        background-image: url('/img/alley-tablet@1x.jpg');

        @media (min-resolution: $retina-dpi), (min-resolution: $retina-dppx) {
          background-image: url("/img/alley-tablet@2x.jpg");
          background-size: 1024px auto;
        }

        &_container {
          flex-direction: column;
        }

        &_description {
          margin-bottom: 0;
        }

        &_item {
          flex-direction: row-reverse;
          justify-content: space-between;;
          padding: 50px;
          min-height: 180px;

          &::after {
            display: none;
          }


          &::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;

            width: 100%;
            height: 1px;
            background-color: $white;
            opacity: 0.6;
          }

          &:last-of-type::before {
            display: none;
          }

        }
      }

      // animation classes tablet
      .open {
        flex-direction: column;
        justify-content: center;
        min-height: 505px;

        .accordion_item-hover {
          display: none;
        }


        .accordion_sub-title {
          width: 135px;
        }

        .accordion_description {
          position: static;
          display: block;
          opacity: 1;
          transition: all 0.3s;
        }

        .accordion_button {
          transform: translate(0, -50px)
                     rotate(135deg)
                     scale(1.3);
          transition: all 0.8s ;
        }
      }

      .close {
        justify-content: center;
        min-height: 70px !important;
        padding: 0 50px;

        .accordion_button {
          display: none;
        }

        .accordion_sub-title {
          display: none;
        }

      }

      .initial {
        transition: all 0.3s;
      }
    }

    @media (max-width: 550px) {
        .accordion {

          .swiper-pagination {
            text-align: center;
          }

          .swiper-pagination-bullet {
            border: 1px solid $white;
            opacity: 1;
            background: none;

            &-active {
              background: #fff;
            }
          }

          min-height: unset;

          &_item {
            flex-shrink: 0;
            justify-content: center;
            min-height: 417px;
          }

          &_item::after,
          &_item::before {
            display: none;
          }

          &_button {
            display: none;
          }

          &_title {
            margin-bottom: 0;

            font-size: 14px;
            line-height: 25px;
          }

          &_sub-title {
            margin-bottom: 40px;

            font-size: 20px;
            line-height: 25px;
          }

          &_description {
            position: static;
            display: block;
            opacity: 1;
            margin-bottom: 0;

            font-size: 16px;
            line-height: 22px;
          }
        }
    }

    @media (max-width: 320px) {
        .accordion {
          background-image: url('/img/alley-mobile@1x.jpg');

          @media (min-resolution: $retina-dpi), (min-resolution: $retina-dppx) {
            background-image: url("/img/alley-mobile@2x.jpg");
            background-size: 320px auto;
          }
        }
    }

</style>