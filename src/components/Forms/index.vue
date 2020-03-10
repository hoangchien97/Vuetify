<template>
  <div>
    <div>Form Control</div>
    <table>
      <ul>
        <li>
          <router-link :to="{ name: 'VComplete' }">VComplete</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Checkbox' }">Checkbox</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ComboBox' }">ComboBox</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Form' }">Form</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'FormVeeValidate' }"
            >Form Vee-Validate</router-link
          >
        </li>
      </ul>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FormControl"
};
</script>

<style></style>
