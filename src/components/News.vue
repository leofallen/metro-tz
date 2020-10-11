<template>
  <section class="news" id="news-block">

    <h1 class="news_title">Новости</h1>

    <div class="news_select">
      <select class="news_year" name="year" id="year" v-model="year">
        <option value="2019">2019 год</option>
        <option value="2018">2018 год</option>
        <option value="2017">2017 год</option>
      </select>
    </div>

    <div class="news_select">
      <select class="news_month" name="month" id="month" @change="onChange($event)">
        <option value="all">Все месяцы</option>
        <option value="01">Январь</option>
        <option value="02">Февраль</option>
        <option value="03">Март</option>
        <option value="04">Апрель</option>
        <option value="05">Май</option>
        <option value="06">Июнь</option>
        <option value="07">Июль</option>
        <option value="08">Август</option>
        <option value="09">Сентябрь</option>
        <option value="10">Октябрь</option>
        <option value="11">Ноябрь</option>
        <option value="12">Декабрь</option>
      </select>
    </div>

    <div class="news_inner">
      <transition v-for="(item, i) in news" :key="i" name="fade" appear>
        <a class="news_item"
           href="" 
           :key="i"
           v-if="
                   selected == item.date.month 
                   || selected == 'all'
                   && i < maxCount">
          <article
                   
                   >
            <figure>
              <picture>
                <source type="image/webp">
                <source >
                <img :src="'./img/news/' + item.img + '@1x.jpg'" :alt="item.img">
              </picture>
              <figcaption class="news_item-title"> {{ item.title }} </figcaption>
            </figure>
            <p class="news_item-description">{{ item.description }}</p>
            <span class="news_item-date">{{item.date.day + '.' + item.date.month + '.' +  item.date.year }}</span>
          </article>
        </a>
      </transition>
    </div>

    <a class="news_button" @click="plus">загрузить еще</a>

  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selected: 'all',
      maxCount: 3,
      year: '2019',
    }
  },

  methods: {
    plus() {
      if(this.maxCount < 30) {
        this.maxCount += 3;
      }
    },

    onChange(evt) {
      this.selected = evt.target.value
    }
  },

  computed: {
    ...mapGetters([
      'news',
    ]),
  }
}
</script>

<style lang="scss">
  @import "../sass/global.scss";

  .news_inner {
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
  }

  .news {
    padding: 90px calc(50% - 494px);

    &_title {
      margin-bottom: 30px;

      font-family: $noto-font;
      font-weight: bold;
      font-size: 35px;
      line-height: 50px;
    }

    &_item {
      color: $black;

      max-width: 316px;
      margin-left: 20px;
      margin-bottom: 115px;

      & figure {
        margin: 0;
      }

      &:hover .news_item-title {
        cursor: pointer;
        color: $light-red;
      }
    }

    &_item-title {
      margin-top: 10px;
      margin-bottom: 15px;

      font-family: $noto-font;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
    }

    &_item-description {
      margin-top: 0;
      margin-bottom: 10px;

      font-family: $noto-font;
      font-weight: 300;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }

    &_item-date {
      font-family: $noto-font;
      font-weight: 300;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.01em;
      opacity: 0.6;
    }

    &_select {
      position: relative;

      display: inline-block;
      margin-right: 75px;
      margin-bottom: 60px;

      &:hover::before,
      &:hover::after {
        background-color: $light-red;
      }

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 7px;
        height: 2px;
        background-color: $black;
      }

      &::before {
        z-index: 1;
        top: 12px;
        right: 0;
        transform: rotate(-45deg);
      }

      &::after {
        top: 12px;
        right: 4px;
        transform: rotate(45deg);
      }
    }

    &_year,
    &_month {
      position: relative;
      padding-right: 20px;

      font-family: $noto-font;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.02em;

      border: none;

      &:hover  {
        cursor: pointer;
        color: $light-red;
      }
    }

    &_button {
      display: block;
      padding: 12px 50px;
      max-width: 242px;
      margin: 0 auto;
      margin-top: -57px;

      font-family: $noto-font;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: $white;

      border-radius: 25px;
      background-color: $light-red;

      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
  }

  .fade-enter-active {
  animation: slideIn 0.5s;
}

@keyframes slideIn {
  from{
    opacity: 0;
    transform: translateY(-50px);
  }

  to{
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>