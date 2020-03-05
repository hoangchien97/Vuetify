<template>
  <span>
    <slot :categories="categories"></slot>
    <slot name="new_categories" :categories="newCategories"></slot>
  </span>
</template>

<script>
export default {
  name: "Slot",
  data() {
    return {
      categories: ["Dart", "Flutter", "Vue.js"],
      newCategories: ["Mobile", "Cross Platform", "Frontend Tech"]
    };
  }
};
</script>
