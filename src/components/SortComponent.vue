<template>
  <div class="sort">
    <div
      :class="`sort-items ${sort.isSelected ? 'sort-active' : ''}`"
      v-for="(sort, idx) in sortItems"
      :key="sort.value"
      @click="handleClick(idx)"
    >
      {{ sort.name }}
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {
    handleClick(idx) {
      this.sortItems.forEach((item) => (item.isSelected = false));
      this.sortItems[idx].isSelected = true;
    },
  },
};
</script>
