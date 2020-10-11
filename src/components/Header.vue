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
  }
}
</script>

<style lang="scss">

  @import "../sass/global.scss";

  .main-header {
    display: flex;
    justify-content: space-between;
    padding: 40px;

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
      }

      &--tel,
      &--lang {
        margin-left: 30px;

        background-color: $dark-turquoise;
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