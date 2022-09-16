<template>
  <div class="search">
    <input
      type="text"
      class="search-input"
      placeholder="Поиск"
      v-model="inputValue"
    />
    <button class="search-btn" @click.enter="clickHandler">
      <img src="@/assets/icons/search.svg" alt="search" />
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  emits: ["searchHandler"],
  data: () => ({
    inputValue: "",
  }),
  methods: {
    ...mapMutations(["SET_TEXT"]),
    clickHandler() {
      this.SET_TEXT(this.inputValue);
    },
  },
};
</script>
