<template>
  <div>
    <h1>Learning Vue</h1>
    <Slot>
      <h1 style="font-weight: bold; color: red" slot="title">H1 Title from named "title" slot</h1>
      <h1 slot="description">Text from named "description" slot</h1>
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
