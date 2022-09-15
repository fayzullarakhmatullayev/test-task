<template>
  <div id="app">
    <div class="container">
      <the-navbar />
      <section class="top">
        <SortComponent />
        <SearchComponent />
      </section>
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import SearchComponent from "./components/SearchComponent.vue";
import SortComponent from "./components/SortComponent.vue";
export default {
  components: { TheNavbar, SearchComponent, SortComponent },
};
</script>
