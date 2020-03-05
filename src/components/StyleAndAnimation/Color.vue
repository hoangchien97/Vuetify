<template>
  <div>
    <h2 class="title">Test variable scss</h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/scss/variable.scss";
.title {
  color: $color-title;
}
</style>
