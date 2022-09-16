<template>
  <div class="card-wrapper">
    <Card
      v-for="product in sortedProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  components: { Card },
  computed: {
    ...mapState(["products", "text", "typeIndex"]),
    sortedProducts() {
      let searchedProducts = this.products;
      if (this.text.length > 0) {
        searchedProducts = this.products.filter((product) =>
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
    ...mapActions(["fetchProducts"]),
    ...mapMutations(["SET_TEXT", "SET_TYPE_INDEX"]),
  },
  mounted() {
    this.SET_TEXT("");
    this.SET_TYPE_INDEX(0);
    this.fetchProducts();
  },
};
</script>
