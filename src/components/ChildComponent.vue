<template>
  <h3 style="color: darkcyan">Child Component is here.</h3>
  <div style="background-color: burlywood; padding: 10px">
    <h3>
      Now the single property "UserName" is passing from Parent Component here :
      {{ userName }}
    </h3>
  </div>
  <br />
  <div style="background-color: darkgrey; padding: 10px">
    <h3>
      Now the user "Detail object" is passing from Parent Component here :
      {{ userDetail }}
    </h3>
  </div>

  <br />
  <h3>If we click on a button we get data the child data here in parent component.</h3>
  <div>
    <button @click="sendDataToParent">Get Data</button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    userName: String,
    userDetail: Object,
  },
  methods: {
    sendDataToParent() {
      this.$router.push("/parent");
      this.$emit("test-data", "Data from child component");
    },
  },
};
</script>

<style>
h1 {
  color: brown;
}
</style>
