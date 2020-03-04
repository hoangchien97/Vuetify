<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <ul>
        <li>
          <router-link :to="{ name: 'homepage' }">HomePage</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'profile', params: { username: 'hdchien97' } }"
            >User Profile</router-link
          >
        </li>
        <li>
          <div @click="viewProductDetail" style="cursor :pointer">
            View Product Detail
          </div>
        </li>
        <li>
          <router-link :to="{ name: 'ListEmployees' }"
            >List Employees</router-link
          >
        </li>
      </ul>
      <div>
        <li>
          <router-link :to="{ name: 'Learning' }">Learning Vuetify</router-link>
        </li>
        <!-- using i18n -->
        <p>{{ $vuetify.lang.t("$vuetify.Learning") }}</p>
      </div>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
    id: 9
  }),
  methods: {
    viewProductDetail() {
      this.$router.push(`/products/${this.id}`);
    }
  }
};
</script>
