<template>
  <div>
    <app-header></app-header>
    <app-info></app-info>
    <app-accordion></app-accordion>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppInfo from "./components/Info";
import AppAccordion from "./components/Accordion";

export default {
  data() {
    return {

    }
  },
    components: {
    AppHeader,
    AppInfo,
    AppAccordion,
  }
}
</script>

<style>

</style>