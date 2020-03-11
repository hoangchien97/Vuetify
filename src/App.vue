<template>
  <v-app>
    <v-content>
      <ul>
        <li>
          <router-link :to="{ name: 'Login' }">Login</router-link>
        </li>
      </ul>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
  methods: {}
};
</script>
