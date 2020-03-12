<template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="isLogged">
      <div>
        {{ user.name }}
      </div>
      <div class="login-box-btn">
        <v-btn color="success" @click="logout()" :loading="btnLoadding"
          ><v-icon>mdi-input</v-icon> Logout</v-btn
        >
      </div>
    </template>
    <v-container>
      <v-row>
        <v-col>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      isLogged: this.$store.getters.isLogged,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
