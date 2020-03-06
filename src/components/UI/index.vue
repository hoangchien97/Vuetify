<template>
  <div>
    <div>
      <h2 class="display-2" color="primary">UI Component</h2>
      <ul>
        <li>
          <router-link :to="{ name: 'VComplete' }">VComplete</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'VFilter' }">VFilter</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Popover Menu' }">Popover Menu</router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "UI Components"
};
</script>

<style></style>
