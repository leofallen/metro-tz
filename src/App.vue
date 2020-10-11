<template>
  <div>
    <app-header></app-header>
    <app-about></app-about>
    <app-accordion></app-accordion>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppAbout from "./components/About";
import AppAccordion from "./components/Accordion";

export default {
  data() {
    return {

    }
  },
    components: {
    AppHeader,
    AppAbout,
    AppAccordion,
  }
}
</script>

<style>

</style>