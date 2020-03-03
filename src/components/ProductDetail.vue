<template>
  <div>
    <h1>Product detail : {{ id }}</h1>
    <p>Name : Ao thun co tron</p>
    <p>Size : XL</p>
    <p>Color : Black and White</p>
    <button>Payment</button>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    id: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style></style>
