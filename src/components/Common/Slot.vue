<template>
  <span>
    <slot :categories="categories"></slot>
  </span>
</template>

<script>
export default {
  name: "Slot",
  data() {
    return {
      categories: ["Dart", "Flutter", "Vue.js"]
    };
  }
};
</script>
