<template>

  <section class="info">
    <h1 class="info_title">О нас</h1>

    <div class="info_link-wrapper">
      <a class="info_link" href="">Основная информация</a>
      <a class="info_link" href="">Новости</a>
    </div>

    <p class="info_text">
      Селекция бренда, анализируя результаты рекламной кампании, осмысленно масштабирует 
      SWOT-анализ. Перераспределение бюджета, как следует из вышесказанного, переворачивает 
      коллективный контент. Поэтому управление брендом искажает социометрический ребрендинг: 
    </p>

    <ul class="info_list">
      <li class="info_list-item">Управление брендом как искажение социометрического поиска</li>
      <li class="info_list-item">Селекция бренда, анализируя результаты рекламной кампании бюджета как его основа</li>
      <li class="info_list-item">Поэтому управление брендом искажает социометрический ребрендинг</li>
      <li>
        <ul class="info_list-sub">
          <li class="info_list-item">Поэтому управление брендом искажает социометрический ребрендинг</li>
          <li class="info_list-item">Селекция бренда, анализируя результаты рекламной кампании</li>
        </ul>
      </li>
      <li class="info_list-item">Диверсификация бизнеса, на первый взгляд, изменяет рекламный макет, работая над проектом.</li>
    </ul>

    <p class="info_text">
      Можно предположить, что изменение глобальной стратегии поддерживает экспериментальный метод изучения рынка. 
      Традиционный канал стабилизирует product placement, осознавая социальную ответственность бизнеса. 
      По сути, комплексный анализ ситуации довольно неоднозначен.
    </p>

    <!-- Slider -->
    <app-slider></app-slider>

    <p class="info_text">
      Можно предположить, что изменение глобальной стратегии поддерживает экспериментальный метод изучения рынка. 
      Традиционный канал стабилизирует product placement, осознавая социальную ответственность бизнеса. По сути, 
      комплексный анализ ситуации довольно неоднозначен. 
    </p>

    <blockquote class="info_quote quote">
      <p class="quote_text">
        У группы «Метро» огромный опыт в строительстве, помимо жилья мы занимались инфраструктурными, промышленными, 
        социальными объектами. Компания выступала генеральным подрядчиком строительства «ЭкспоФорума», Депо «Южное», 
        также мы строили «Музей железных дорог России». Наша Компания обладает всеми необходимыми ресурсами.
      </p>
      <h4 class="quote_author">Геннадий Волковский</h4>
      <span class="quote_author-info">Генеральный директор компании “Метро”</span>
    </blockquote>

    <p class="info_text">
      В 2018 году компания удостоилась главной архитектурной премии Европы — European Prize for Architecture. Знатоки 
      архитектуры считают нашу компанию мастером выверенных фасадов.
    </p>

  </section>

</template>

<script>

import AppSlider from "./Slider";

export default {
  data() {
    return {

    }
  },
  components: {
    AppSlider,
  }
}
</script>

<style lang="scss">
  @import "../sass/global.scss";


  .info {
    padding: 88px calc(50% - 512px);

    &_title {
      margin: 0;
      margin-bottom: 52px;

      font-family: $noto-font;
      font-weight: 500;
      font-size: 45px;
      line-height: 65px;
      color: $title-black;
    }

    &_link-wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    &_text {
      &:first-of-type {
        margin-top: 80px;
      }

      max-width: 652px;
      margin-bottom: 30px;

      font-family: $noto-font;
      font-weight: 300;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.01em;
      color: $black;
    }

    &_list {
      @include list-reset;

      & li:last-child {
        margin-bottom: 30px;
      }

      max-width: 649px;

      &-item {
        position: relative;

        margin-bottom: 20px;
        padding-left: 38px;

        font-family: $noto-font;
        font-weight: 300;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: -0.01em;
        color: $black;

        &::before {
          content: "";
          position: absolute;
          top: 7px;
          left: 0;

          width: 8px;
          height: 8px;

          border-radius: 50%;

          background-color: $dark-turquoise;
        }
      }
    }

    &_list-sub {
      @include list-reset;

      & li:last-child {
        margin-bottom: 20px;
      }

      padding-left: 38px;
    }



    &_link {
      position: relative;

      padding-right: 19px;
      margin-right: 43px;

      font-family: $noto-font;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: $black;

      &::after {
        content: "";
        position: absolute;
        top: 7px;
        right: 0;

        width: 11px;
        height: 15px;

        background-image: url('/img/icon-arrow.svg');
        background-repeat: no-repeat;
        background-position: 0 0;

      }
    }

    &_quote {
      position: relative;

      max-width: 568px;
      margin-top: 58px;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 50px;
      padding-left: 37px;

      font-family: $noto-font;
      font-weight: 300;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.01em;

      &::before {
        content: "";
        position: absolute;
        top: -9px;
        left: -1px;

        width: 20px;
        height: 15px;

        background-image: url("/img/icon-quotes.svg");
        background-repeat: no-repeat;
        background-position: 0 0;
      }
    }
  }

  .quote {
    &_author {
      margin-bottom: 0;

      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.01em;
    }

    &_author-info {
      font-weight: 300;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.02em;
    }
  }

  @media (max-width: 1100px) {
    .info {
      padding: 88px 40px;
    }
  }


  @media (max-width: 500px) {
    .info {
      padding: 15px;

      &_title {
        font-size: 30px;
      }

      &_link {

        font-size: 16px;
        line-height: 22px;
      }

      &_text {
        font-size: 18px;
        line-height: 25px;
      }

      &_list-item {
        font-size: 16px;
        line-height: 22px;
      }

      &_quote {
        font-size: 16px;
        line-height: 22px;

        &_author {
          font-size: 16px;
          line-height: 22px;
        }

        &_author-info {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
</style>