<template>
  <section class="news" id="news-block">


    <div class="news_wrapper">
      <h1 class="news_title">Новости</h1>
    
      <div class="news_select">
        <select class="news_year" name="year" id="year" @change="onYaerChange($event)">
          <option value="2019">2019 год</option>
          <option value="2018">2018 год</option>
          <option value="2017">2017 год</option>
        </select>
      </div>

      <div class="news_select">
        <select class="news_month" name="month" id="month" @change="onMonthChange($event)">
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
        <transition v-for="(item) in currentItems"
                    :key="news.indexOf(item)"
                    name="fade"
                    appear>
          <a class="news_item"
             :key="news.indexOf(item)"

             >
            <article>
              <figure>
                <picture>
                  <source type="image/webp" :srcset="'./img/news/' + item.img + '@1x.webp, ' + './img/news/' + item.img + '@2x.webp 2x'">
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
    </div>

    <a class="news_button" :class="buttonDisabled" @click="plus">загрузить еще</a>

  </section>
</template>

<script>
import mocks from '../mocks/mock';


export default {
  data() {
    return {
      news: mocks.news,
      month: 'all',
      year: '2019',
      initialCount: 3,
      maxCount: 3,
      currentItems: [],
      sortItems: [],
    }
  },

  methods: {
    plus() {
      this.maxCount += this.initialCount;
      this.sort();
    },

    onMonthChange(evt) {
      this.month = evt.target.value
      this.maxCount = this.initialCount;
      this.sort();
    },

    onYaerChange(evt) {
      this.year = evt.target.value
      this.maxCount = this.initialCount;
      this.sort();
    },

    sort() {
      this.currentItems = [];
      this.sortItems = [];
      for (let item of this.news) {
        if((item.date.month == this.month || this.month == 'all') && item.date.year == this.year) {
          this.sortItems.push(item);
        }
      }

      this.currentItems = this.sortItems.slice(0, this.maxCount);
    },
  },

  computed: {
    buttonDisabled() {
      return this.maxCount >= this.sortItems.length ? 'news_button--hide' : false
    }
  },

  beforeMount() {
    this.sort()
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

  .news_wrapper {
    margin: 0 auto;
    overflow: hidden;
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
      position: relative;

      color: $black;

      max-width: 316px;
      margin-left: 20px;
      margin-bottom: 80px;

      & figure {
        margin: 0;
      }

      &:nth-child(3n) {
        &::before {
          content: "";
          position: absolute;

          bottom: -45px;
          right: 0;
          width: 100vw;
          border-bottom: 1px dotted $black;
          opacity: 0.3;
        }
      }

      &:last-child {
        &::before {
          content: none;
        }
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
      margin-bottom: 60px;

      &:first-of-type {
        margin-right: 70px;
      }

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
      font-weight: 400;
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
      margin-top: -19px;

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

      &--hide {
        display: none;
      }
    }
  }

  @media (max-width: 1024px) {
    .news {
      &_wrapper {
        max-width: 652px;
      }

      &_item {
        &:nth-child(3n) {
          &::before {
            content: none;
          }
        }

        &:nth-child(2n) {
          &::before {
            content: "";
            position: absolute;

            bottom: -45px;
            right: 0;
            width: 100vw;
            border-bottom: 1px dotted $black;
            opacity: 0.3;
          }
        }

        &:last-child {
          &::before {
            content: none;
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    .news {
      padding: 70px 10px 90px;

      &_wrapper {
        max-width: 320px;
      }

      &_select {
        &:first-of-type {
          margin-right: 60px;
        }
      }

      &_item {
        position: relative;
        margin-bottom: 64px;

        &:nth-child(3n) {
          &::before {
            content: '';
          }
        }

        &:nth-child(2n) {
          &::before {
            content: '';
          }
        }

        &::before {
          content: "";
          position: absolute;
          bottom: -45px;
          right: 0;

          width: 100vw;
          border-bottom: 1px dotted $black;
          opacity: 0.3;
        }

        &:last-child {
          &::before {
            content: none;
          }
        }
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