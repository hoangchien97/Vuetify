<template>
  <div id="app">
    <v-app id="inspire">
      <div class="text-center">
        <v-menu transition="scale-transition" origin="center center">
          <template v-slot:activator="{ on }">
            <v-btn dark color="primary" v-on="on">
              Scale Transition
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app>
  </div>
  <!-- <div id="app">
    <v-app id="inspire">
      <v-row justify="center">
        <v-menu transition="slide-x-transition">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" class="ma-2" v-on="on">
              Slide X Transition
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="n in 5" :key="n" link>
              <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
    </v-app>
  </div> -->
</template>

<script>
export default {
  name: "Transition"
};
</script>

<style></style>
