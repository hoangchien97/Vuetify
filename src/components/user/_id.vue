<template>
  <div>
    <h1>Router params dynamic</h1>
    <h2>User : {{ $route.params.username }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style></style>
