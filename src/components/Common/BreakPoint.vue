<template>
  <div id="app">
    <v-app id="inspire">
      <v-row justify="center">
        <v-btn color="primary" dark @click.stop="dialog = true">
          Open Dialog
        </v-btn>

        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline"
              >Use Google's location service?</v-card-title
            >

            <v-card-text>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false">
                Disagree
              </v-btn>

              <v-btn color="green darken-1" text @click="dialog = false">
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    isMobile: false,
    dialog: true
  }),

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    }
  }
};
</script>
