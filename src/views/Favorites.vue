<template>
  <div class="card-wrapper">
    <Card
      v-for="product in sortedProducts"
      :key="product.id"
      :product="product"
      :isFavoriteItem="true"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: { Card },
  computed: {
    ...mapState(["favoriteProducts", "text", "typeIndex"]),
    sortedProducts() {
      let searchedProducts = this.favoriteProducts;
      if (this.text.length > 0) {
        searchedProducts = this.favoriteProducts.filter((product) =>
          product.name.toLowerCase().includes(this.text.toLowerCase())
        );
      }
      if (this.typeIndex !== 0) {
        return searchedProducts.filter(
          (product) => product.type_id === this.typeIndex
        );
      } else {
        return searchedProducts;
      }
    },
  },
  methods: {
    ...mapMutations(["SET_TEXT", "SET_TYPE_INDEX"]),
  },
  mounted() {
    this.SET_TEXT("");
    this.SET_TYPE_INDEX(0);
  },
};
</script>
