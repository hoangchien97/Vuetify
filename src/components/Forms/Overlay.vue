<template>
  <div>
    <div>Overlay</div>
    <div id="app">
      <v-app id="inspire">
        <div class="text-center">
          <v-btn
            color="deep-purple accent-4"
            class="white--text"
            @click="overlay = !overlay"
          >
            Launch Application
            <v-icon right>mdi-open-in-new</v-icon>
          </v-btn>

          <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"
              >Loading</v-progress-circular
            >
          </v-overlay>
        </div>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlay: false
    };
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 1000);
    }
  }
};
</script>

<style></style>
