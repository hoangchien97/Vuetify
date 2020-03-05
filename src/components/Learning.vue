<template>
  <div>
    <h1>Learning Vue</h1>
    <h2>Slot</h2>
    <Slot v-slot:[collection]="{ categories }">
      <ul>
        <li v-for="category in categories" :key="category">
          {{ category }}
        </li>
      </ul>
    </Slot>
    <button class="btn btn-outline-secondary" @click="changeCollection">
      Change
    </button>
  </div>
</template>

<script>
import Slot from "./Common/Slot";
export default {
  name: "Learning",
  components: { Slot },
  data() {
    return {
      collection: "default"
    };
  },
  methods: {
    changeCollection() {
      if (this.collection === "default") {
        this.collection = "new_categories";
      } else {
        this.collection = "default";
      }
    }
  }
};
</script>

<style></style>
