<template>
  <div id="app">
    <div class="container">
      <the-navbar />

      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
export default {
  components: { TheNavbar },
};
</script>
