<template>
  <div class="card">
    <div class="card-img-top">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <div class="card-title">
        <slot name="title">Default Card title</slot>
      </div>
      <div class="card-text">
        <slot>This is just a default Card text</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slot"
};
</script>

<style></style>
