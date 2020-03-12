<template>
  <div class="block-login">
    <div class="overlay">
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm12 md6>
            <div class="md-layout">
              <div class="md-layout-item">
                <h3 class="display-3">Welcome to Savvycom</h3>
                <span class="subheading"
                  >System to manage Check-in/Check-out, requests for vacations,
                  job notes, announcements, reports, employees, projects of
                  savvycom.</span
                >
                <v-divider class="my-3"></v-divider>
                <div class="title mb-3">Savvycom time tracker</div>
              </div>

              <!-- Validate by using v-validate instead of rules -->
              <div class="md-layout-item login-form">
                <v-avatar
                  slot="offset"
                  class="mx-auto v-card--material__header v-card v-sheet theme--dark green elevation-10"
                  size="90"
                >
                  <strong class="title">LOGIN</strong>
                  <p class="category font-weight-thin">savvycom</p>
                </v-avatar>
                <v-text-field
                  label="Enter your email"
                  :rules="[rules.required, rules.email]"
                  v-model="formData.email"
                  prepend-icon="mdi mdi-email"
                ></v-text-field>
                <v-text-field
                  label="Enter your password"
                  :rules="[rules.required, rules.min]"
                  v-model="formData.password"
                  type="password"
                  prepend-icon="mdi mdi-account-circle"
                ></v-text-field>
                <div class="login-box-btn">
                  <v-btn color="success" @click="login()" :loading="btnLoadding"
                    ><v-icon>mdi-input</v-icon> Login</v-btn
                  >
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-snackbar :color="msg.color" top right v-model="msg.show" dark>
      <v-icon color="white" class="mr-3">
        mdi-bell-plus
      </v-icon>
      <div>{{ msg.message }}</div>
      <v-icon size="16" @click="msg.show = false">
        mdi-close-circle
      </v-icon>
    </v-snackbar>
  </div>
</template>

<script>
import { VALID_LENGTH } from "@/plugins/constants";

export default {
  name: "login",

  data() {
    return {
      formData: {
        email: "",
        password: ""
      },
      btnLoadding: false,
      rules: {
        required: value => !!value || "Field is required.",
        min: v => v.length >= VALID_LENGTH.PASSWORD || "Min 6 characters",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },

  beforeCreate() {
    if (this.$store.state.token) {
      this.$router.push("/");
    }
  },

  computed: {
    msg() {
      return this.$store.state.msg;
    }
  },

  methods: {
    async login() {
      if (this.formData.email && this.formData.password) {
        await this.$store.dispatch("login", { ...this.formData });
      }
    }
  }
};
</script>
