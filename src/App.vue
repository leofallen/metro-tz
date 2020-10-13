<template>
  <div>
    <app-header></app-header>
    <app-info></app-info>
    <app-accordion></app-accordion>
    <app-news></app-news>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppInfo from "./components/Info";
import AppAccordion from "./components/Accordion";
import AppNews from "./components/News";
import AppFooter from "./components/Footer";

export default {
  data() {
    return {

    }
  },
    components: {
    AppHeader,
    AppInfo,
    AppAccordion,
    AppNews,
    AppFooter
  }
}
</script>

<style >


</style>