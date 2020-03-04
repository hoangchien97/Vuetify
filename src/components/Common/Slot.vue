<template>
  <div>
    <slot></slot>
    <slot name="title"></slot>
    <slot name="description"></slot>
    <p>It's a veritable slot machine!</p>
  </div>
</template>

<script>
export default {
  name: "ListComponent"
};
</script>

<style></style>
