<template>
  <div style="background-color: aquamarine; padding: 10px">
    <h1>Slots:</h1>
    <h3>
      Slots allow you to define placeholders in your component's template where content
      can be injected from the parent component.
    </h3>
    <br />
    <CustomButtons>
      <span @click="test" style="background-color: brown; color: white">
        {{ label }}</span
      >
    </CustomButtons>
    <CustomButtons>
      <span @click="test" style="background-color: green; color: white">
        {{ label }}</span
      >
    </CustomButtons>
    <CustomButtons>
      <span @click="test" style="background-color: red; color: white"> {{ label }}</span>
    </CustomButtons>
  </div>
</template>

<script>
import CustomButtons from "../components/CustomButtons.vue";
export default {
  name: "SlotsExample",
  data() {
    return {
      label: "Order Now",
    };
  },
  methods: {
    test() {
      console.log("test called..!");
    },
  },
  components: {
    CustomButtons,
  },
};
</script>

<style>
h1 {
  color: brown;
}
</style>
