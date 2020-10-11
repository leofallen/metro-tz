<template>

  <header class="main-header">
    <nav class="main-header_menu">
      <span class="main-header_icon main-header_icon--menu"></span>
    </nav>
    <h3 class="main-header_title">
      <span>метро</span>
      </h3>
    <span class="main-header_icon main-header_icon--lang"></span>
    <a class="main-header_icon main-header_icon--tel" href="tel:89458888888"></a>
  </header>

</template>

<script>

export default {
  
}
</script>

<style lang="scss">

  @import "../sass/global.scss";

  .main-header {
    display: flex;
    padding: 40px;

    &_icon {
      display: block;
      width: 60px;
      height: 60px;
      border-radius: 50%;

      &--menu {
        margin-right: 118px;

        background-color: $light-red;
      }

      &--tel,
      &--lang {
        margin-left: 30px;

        background-color: $dark-turquoise;
      }
    }

    &_title {
      margin-top: 0;
      margin-bottom: 0;
      margin-right: auto;
      margin-left: auto;
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