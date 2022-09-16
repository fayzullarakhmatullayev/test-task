<template>
  <div id="app">
    <div class="container">
      <the-navbar />
      <section class="top">
        <SortComponent />
        <SearchComponent />
      </section>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import SortComponent from "@/components/SortComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
export default {
  components: { TheNavbar, SortComponent, SearchComponent },
};
</script>
