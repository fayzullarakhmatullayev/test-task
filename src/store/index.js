import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    favoriteProducts: [],
    text: "",
    typeIndex: 0,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_TEXT(state, text) {
      state.text = text;
    },
    SET_TYPE_INDEX(state, typeIndex) {
      state.typeIndex = typeIndex;
    },
    SET_FAVORITE_PRODUCT(state, favoriteProduct) {
      const index = state.favoriteProducts.findIndex(
        (product) => product.id === favoriteProduct.id
      );
      if (index === -1) {
        state.favoriteProducts.push(favoriteProduct);
      }
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const res = await fetch("products.json");
        const products = await res.json();
        commit("SET_PRODUCTS", products);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
