<template>
  <div>
    <h1>Learning Vue</h1>
    <!-- <Slot>
      <h1 style="font-weight: bold; color: red" slot="title">
        H1 Title from named "title" slot
      </h1>
      <h1 slot="description">Text from named "description" slot</h1>
    </Slot>
    <Slot>
      <h2>Slot test h2</h2>
      <p>line two</p>
    </Slot> -->
    <Slot2>
      <template v-slot:header>
        <img
          src="https://bezkoder.com/wp-content/uploads/2019/06/bezkoder-test-feature-image.png"
        />
      </template>

      <template v-slot:title>
        <p>BezKoder for mobile developers</p>
      </template>

      <template v-slot:default>
        <p>
          BezKoder.com is built for specific goal: programming languages &
          technique for mobile application, cross-platform software development.
        </p>
        <bkr-button>Read more</bkr-button>
      </template>
    </Slot2>
    
    <Slot2>
      <template v-slot:header>
        <img
          src="https://bezkoder.com/wp-content/uploads/2019/06/bezkoder-test-feature-image.png"
        />
      </template>
    </Slot2>
  </div>
</template>

<script>
// import Slot from "./Common/Slot";
import Slot2 from "./Common/Slot2";
export default {
  name: "Learning",
  components: {
    // Slot,
    Slot2
  },
  data() {
    return {
      items: { a: 1, b: 2, c: 3 }
    };
  }
};
</script>

<style></style>
