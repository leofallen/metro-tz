<template>

  <header class="main-header">
    <nav class="main-header_burger">
      <span class="main-header_icon main-header_icon--burger"
            @click='onClick'
            >
        <span class="main-header_burger"
              :class="menuOpen ? 'main-header_burger--open' : ''"
              ></span>
        <span class="main-header_burger"
              :class="menuOpen ? 'main-header_burger--open' : ''"
              ></span>
        <span class="main-header_burger"
              :class="menuOpen ? 'main-header_burger--open' : ''"
              ></span>
      </span>
    </nav>
    <h3 class="main-header_title">
      <span>метро</span>
      </h3>
    <div class="main-header_icon-wrapper">
      <span class="main-header_icon main-header_icon--lang">
      <span>En</span>
      </span>
      <a class="main-header_icon main-header_icon--tel" href="tel:89458888888">
      <img src="/img/icon-tel.svg" alt="tel">
    </a>
    </div>
  </header>

</template>

<script>

export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  
  methods: {
    onClick() {
      this.menuOpen = this.menuOpen ? false : true;
    }
  },

  mounted(){
    let body = document.querySelector('html')
    let header = document.querySelector('.main-header')
    let news = document.querySelector('.info')
    let accordion = document.querySelector('.accordion')


    news.setAttribute('style', 'transform: translateY(' + header.offsetHeight + 'px)');
    accordion.setAttribute('style', 'margin-top: ' + header.offsetHeight + 'px');

    let pageScroll = () => {

      let count;
      let lastCount;

      window.addEventListener('scroll', (evt) => {

        count = body.scrollTop;

        if(count < lastCount) {
          header.classList.remove('main-header--hide');
        } else {
          header.classList.add('main-header--hide');
        }

        lastCount = body.scrollTop;
      });
    }

    pageScroll()

  }
}
</script>

<style lang="scss">

  @import "../sass/global.scss";

  .main-header {
    position: fixed;
    z-index: 11;

    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    padding: 40px;

    background-color: $white;

    transition: all 0.3s linear;


    &--hide {
      transform: translateY(-100%);
      transition: all 0.3s linear;
    }

    &_burger {
      width: 26px;
      height: 2px;
      margin-bottom: 3px;

      background-color: $white;

      &:first-child {
        margin-top: 2px;
      }
    }

    &_burger--open {
      margin-bottom: 5px;

    }

    &_icon {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 60px;
      height: 60px;
      border-radius: 50%;

      &--burger {
        flex-direction: column;

        background-color: $light-red;
      }

      &--lang {
        font-family: $noto-font;
        color: $white;
        font-weight: bold;
        font-size: 22px;
        line-height: 24px;
        letter-spacing: 0.01em;
        opacity: 0.6;

        &:hover {
          opacity: 0.5 !important;
        }
      }

      &--tel,
      &--lang {
        margin-left: 30px;

        background-color: $dark-turquoise;
      }

      &:hover {
        opacity: 0.6;

        cursor: pointer;
      }
    }

    &_icon-wrapper {
      display: flex;;
    }

    &_title {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 11%;
      padding-top: 15px;

      font-family: $noto-font;
      font-weight: bolder;
      font-size: 33px;
      line-height: 33px;
      color: $title-black;
    }
  }

  @media (max-width: 560px) {
    .main-header {
      padding: 30px 40px;

    }
  }

  @media (max-width: 550px) {
    .main-header {
      padding: 10px;

      &_burger {
        width: 24px;
      }

      &_icon {
        width: 50px;
        height: 50px;
        margin: 0;
      }

      &_title {
        padding-top: 5px;
      }
    }

    .main-header_icon--lang {
      display: none;
    }
  }

</style>