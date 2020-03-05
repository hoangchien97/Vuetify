<template>
  <div>
    <h1>Learning Vue</h1>
    <h2>Slot</h2>
    <Slot v-slot="{ categories }">
      <ul>
        <li v-for="category in categories" :key="category">
          {{ category }}
        </li>
      </ul>
    </Slot>
    <!-- This is shorthand for v-slot: -->
    <!-- <Slot #default="{categories}">
      <ul>
        <li v-for="category in categories" :key="category">
          {{ category }}
        </li>
      </ul>
    </Slot> -->
  </div>
</template>

<script>
import Slot from "./Common/Slot";
export default {
  name: "Learning",
  components: { Slot },
  data() {
    return {};
  }
};
</script>

<style></style>
