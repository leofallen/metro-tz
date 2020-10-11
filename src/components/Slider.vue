<template>
<section class="slider">
  <div class="swiper-container slider-one">

    <div class="swiper-wrapper">

        <div class="swiper-slide" v-for="(item, i) in img.desktop" :key="i">
          <figure class="slider_slide">
            <picture>
              <source type="image/webp" media="(min-width: 769px)" :srcset="'./img/' + img.desktop[i] + '@1x.webp, ' + './img/' + img.desktop[i] + '@2x.webp 2x'">
              <source type="image/webp" media="(min-width: 321px)" :srcset="'./img/' + img.tablet[i] + '@1x.webp, ' + './img/' + img.tablet[i] + '@2x.webp 2x'">
              <source type="image/webp" :srcset="'./img/' + img.mobile[i] + '@1x.webp, ' + './img/' + img.mobile[i] + '@2x.webp 2x'">
              <source  media="(min-width: 769px)" :srcset="'./img/' + img.desktop[i] + '@1x.jpg, ' + './img/' + img.desktop[i] + '@2x.jpg 2x'">
              <source media="(min-width: 321px)" :srcset="'./img/' + img.tablet[i] + '@1x.jpg, ' + './img/' + img.tablet[i] + '@2x.jpg 2x'">
              <source :srcset="'./img/' + img.mobile[i] + '@1x.jpg, ' + './img/' + img.mobile[i] + '@2x.jpg 2x'">
              <img class="" :src="'./img/' + img.desktop[i] + '@1x.jpg'" :alt="img.desktop[i]">
            </picture>
          <figcaption class="slider_caption">{{ captions[i] }}</figcaption>
          </figure>
        </div>

    </div>

    <div class="swiper-pagination"></div>

    <div class="slider_buttons">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>





  </div>
</section>
</template>

<script>

  import Swiper from 'swiper/swiper-bundle';
  import 'swiper/swiper-bundle.css';

  import { mapGetters } from 'vuex';

  export default {

    computed: {
      ...mapGetters({
        img: 'images',
        captions: 'imagesCaptions',
      }),
    },

    beforeMount () {
      console.log(this.img)
    },
  
    mounted() {
      let mobile = window.matchMedia("(max-width: 550px)");

      let options1 = {
        el: '.slider-one',
        loop: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction'
        },
      }

      let options2 = {
        el: '.slider-one',
        loop: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
      }
    
      let sliderOne = new Swiper(options1);

      const initSliderMobile = (mobile) => {
        if(mobile.matches) {
          if(sliderOne) {
            sliderOne.destroy();
            sliderOne = new Swiper(options2);
          }
        } else {
          if(sliderOne) {
            sliderOne.destroy();
            sliderOne = new Swiper(options1);
          }
        }

      }
  
      initSliderMobile(mobile);
      mobile.addListener(initSliderMobile);

    }
  
  }
</script>

<style lang="scss">

  @import "../sass/global.scss";

  .slider {
    max-width: 820px;
    margin-top: 50px;
    margin-bottom: 70px;

    .swiper-slide {
      padding-bottom: 70px;
    }

    .swiper-button-prev {
     margin-left: auto;
    }

    .swiper-button-next {
      margin-left: 10px;
    }
  
    .swiper-button-next,
    .swiper-button-prev {
      position: static;
  
      width: 40px;
      height: 40px;
      margin-top: -55px;
  
      border-radius: 50%;
      background-color: $light-red;
    }
  
    .swiper-pagination {
      bottom: 35px;
  
      text-align: left;
  
      font-family: $noto-font;
      font-size: 15px;
    }

    & img {
      width: 100%;
      height: auto;
    } 

    &_buttons {
      display: flex;
    }

    &_slide {
      position: relative;
      margin: 0;
    }

    &_caption {
      position: absolute;
      top: 103%;
      left: 64px;

      max-width: 571px;
      padding: 0 20px;
      margin-right: 80px;


      font-family: $noto-font;
      font-weight: 300;
      font-size: 14px;
      line-height: 18px;
    }
  }




  @media (max-width: 1024px) {
    .slider {
      max-width: 780px;

      &_caption {
        max-width: 500px;
        padding-left: 0;
      }
    }
  }

  @media (max-width: 768px) {
    .slider {
      max-width: 688px;
    }
  }

  @media (max-width: 550px) {
    .slider {
      .swiper-pagination {
        text-align: center;
      }

      .swiper-pagination {
        bottom: 0;
      }

      .swiper-pagination-bullet {
        border: 1px solid $light-red;
        opacity: 1;
        background: none;

        &-active {
          background: $light-red;
        }
      }

      .swiper-slide {
        padding-bottom: 30px;
      }

      &_caption {
      position: static;

      width: 290px;
      margin: 0 auto;
      padding: 0;
      text-align: center;
     }

      &_buttons {
        display: none;
      }
    }
  }

  @media (max-width: 320px) {
    .slider {
      max-width: 290px;
    }
  }

</style>