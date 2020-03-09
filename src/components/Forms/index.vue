<template>
  <div>
    <div>Form Control</div>
    <table>
      <ul>
        <li>
          <router-link :to="{ name: 'VComplete' }">VComplete</router-link>
        </li>
      </ul>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FormControl"
};
</script>

<style></style>
