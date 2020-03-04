<template>
  <div>
    <h1>Learning Vue</h1>
    <Slot>
      <h1>Slot test h1</h1>
    </Slot>
    <Slot>
      <h2>Slot test h2</h2>
      <p>line two</p>
    </Slot>
  </div>
</template>

<script>
import Slot from "./Common/Slot";
export default {
  name: "Learning",
  components: {
    Slot
  },
  data() {
    return {
      items: { a: 1, b: 2, c: 3 }
    };
  }
};
</script>

<style></style>
