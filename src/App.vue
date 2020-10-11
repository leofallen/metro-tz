<template>
  <div>
    <app-header></app-header>
    <app-info></app-info>
    <app-accordion></app-accordion>
    <app-news></app-news>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppInfo from "./components/Info";
import AppAccordion from "./components/Accordion";
import AppNews from "./components/News";

export default {
  data() {
    return {

    }
  },
    components: {
    AppHeader,
    AppInfo,
    AppAccordion,
    AppNews
  }
}
</script>

<style>


</style>