<template>
  <footer class="main-footer">
    <div class="main-footer_inner">
      <span class="main-footer_copyright">2005—2019 © «Метро»</span>
      <span class="main-footer_link">Сделано в <a href="https://cpeople.ru/">CreativePeople</a></span>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import "../sass/global.scss";

  .main-footer {

    &_inner {
      position: relative;

      display: flex;
      justify-content: space-between;

      &::after {
        content: '';
        position: absolute;
        top: -58px;
        left: 0;

        width: 100%;
        height: 1px;

        background-color: $black;
      }
    }

    padding: 58px calc(50% - 494px);

    font-family: $noto-font;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;

    &_link {
      & a {
        font-weight: 400;
        color: $light-red;
      }
    }
  }

  @media (max-width:1024px) {
    .main-footer {
      padding: 58px 20px;
    }
  }

  @media (max-width: 550px) {
    .main-footer {
      padding: 10px;



      &_inner {
        flex-direction: column;
        justify-content: space-around;
        min-height: 140px;
        text-align: center;

        &::after {
          top: -10px;
        }
      }
    }
  }
</style>