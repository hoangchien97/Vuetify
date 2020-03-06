<template>
  <div>
    <h2 class="title">Test variable scss</h2>
  </div>
</template>

<script>
export default {
  name: "Color"
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/index.scss";
.title {
  color: $primary;
}
</style>
