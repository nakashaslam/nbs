<template>
  <div style="background-color: aquamarine; padding: 10px">
    <h3>This component is basically using for Slots Example:</h3>
    <br />
    <button>
      <slot>
        <span style="background-color: black">Submit</span>
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "CustomButtons",
};
</script>

<style>
h1 {
  color: brown;
}
</style>
