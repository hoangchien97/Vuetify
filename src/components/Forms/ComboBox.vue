<template>
  <div id="app">
    <!-- <v-app id="inspire">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-combobox
              v-model="select"
              :items="items"
              label="Select a favorite activity or create a new one"
              multiple
            ></v-combobox>
          </v-col>
          <v-col cols="12">
            <v-combobox
              v-model="select"
              :items="items"
              label="I use chips"
              multiple
              chips
            ></v-combobox>
          </v-col>
          <v-col cols="12">
            <v-combobox
              v-model="select"
              :items="items"
              label="I use a scoped slot"
              multiple
              chips
            >
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  :disabled="data.disabled"
                  @click:close="data.parent.selectItem(data.item)"
                >
                  <v-avatar
                    class="accent white--text"
                    left
                    v-text="data.item.slice(0, 1).toUpperCase()"
                  ></v-avatar>
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>
          </v-col>
          <v-col cols="12">
            <v-combobox
              v-model="select"
              label="I'm readonly"
              chips
              multiple
              readonly
            ></v-combobox>
          </v-col>
        </v-row>
      </v-container>
    </v-app> -->
    <v-app id="inspire">
      <v-container fluid>
        <v-combobox
          v-model="model"
          :items="items"
          :search-input.sync="search"
          hide-selected
          hint="Maximum of 5 tags"
          label="Add some tags"
          multiple
          persistent-hint
          small-chips
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  No results matching "<strong>{{ search }}</strong
                  >". Press <kbd>enter</kbd> to create a new one
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-combobox>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "ComboBox",
  data() {
    return {
      select: ["Vuetify", "Programming"],
      items: ["Programming", "Design", "Vue", "Vuetify"],
      model: ["Vuetify"],
      search: null
    };
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    }
  }
};
</script>

<style></style>
