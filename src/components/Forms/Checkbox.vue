<template>
  <div id="app">
    <v-app id="inspire">
      <v-container class="px-0" fluid>
        <v-row>
          <v-col auto>
            <v-checkbox
              v-model="checkbox"
              :label="`Checkbox 1: ${checkbox.toString()}`"
            ></v-checkbox>
            <v-radio-group v-model="radioGroup">
              <v-radio
                v-for="n in 3"
                :key="n"
                :label="`Radio ${n}`"
                :value="n"
              ></v-radio>
            </v-radio-group>
            <v-switch
              v-model="switch1"
              name="SwichAccount"
              :label="`Switch 1: ${switch1.toString()}`"
            ></v-switch>
            <v-btn @click="Send()">
              Send
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <div id="app">
            <v-app id="inspire">
              <v-container fluid>
                <p>{{ selected }}</p>
                <v-checkbox
                  v-model="selected"
                  label="John"
                  value="John"
                ></v-checkbox>
                <v-checkbox
                  v-model="selected"
                  label="Jacob"
                  value="Jacob"
                ></v-checkbox>
              </v-container>
            </v-app>
          </div>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  data() {
    return {
      checkbox: true,
      radioGroup: 1,
      switch1: true,
      selected: ["John"]
    };
  },
  methods: {
    Send() {
      console.log(222, this.switch1);
    }
  }
};
</script>

<style></style>
