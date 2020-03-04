<template>
  <div>
    <v-icon>$vuetify.icons.product</v-icon>
    <v-icon>$product</v-icon>

    <v-icon v-text="'$vuetify.icons.support'"></v-icon>
    <v-icon v-text="'$support'"></v-icon>

    <v-icon v-html="'$vuetify.icons.steam'"></v-icon>
    <v-icon v-html="'$steam'"></v-icon>

    <v-icon v-html="'$xbox'"></v-icon>

    <v-icon v-text="platform"></v-icon>
    <h1 style="color=red">This is home page !</h1>

    <h2>
      <v-icon class="mdi mdi-plus" x-large color="red"></v-icon>
    </h2>
    <h2>
      <v-icon x-large color="red">mdi-plus</v-icon>
    </h2>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    user: {
      name: "John Leider",
      platform: "pc"
    }
  }),

  computed: {
    platform() {
      return "$" + this.user.platform;
    }
  }
};
</script>

<style></style>
