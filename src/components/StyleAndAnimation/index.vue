<template>
  <div>
    <div>
      Style And Animation
      <ul>
        <li>
          <router-link :to="{ name: 'Color' }">
            Color
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'BlockQuote' }">
            BlockQuote
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "StyleAndAnimation"
};
</script>

<style></style>
