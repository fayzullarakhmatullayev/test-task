<template>
  <div class="sort">
    <div
      :class="`sort-items ${typeIndex === idx ? 'sort-active' : ''}`"
      v-for="(sort, idx) in sortItems"
      :key="sort.value"
      @click="SET_TYPE_INDEX(idx)"
    >
      {{ sort.name }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  emits: ["sortByType"],
  data: () => ({
    sortItems: [
      {
        value: 1,
        name: "Все типы",
        isSelected: true,
      },
      {
        value: 2,
        name: "Прямые продажи",
        isSelected: false,
      },
      {
        value: 3,
        name: "Аукцион",
        isSelected: false,
      },
    ],
  }),
  computed: {
    ...mapState(["typeIndex"]),
  },
  methods: {
    ...mapMutations(["SET_TYPE_INDEX"]),
  },
};
</script>
