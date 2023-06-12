<template>
  <h1>Parent Component:</h1>
  <h3>
    We are going to display <b style="color: darkcyan">Child Component</b> inside the
    parent component
  </h3>
  <br />
  <h3>Now we are going to pass data from parent to Child</h3>
  <p>
    When we have to pass some data from parent to child, you need <b>Props</b> in child
    component to pass data.
  </p>

  <br />
  <h3>
    We can also pass object from data property of parent component to child, like this
  </h3>
  <ChildComponent
    userName="Muhammad Naqash Aslam"
    :userDetail="userDetail"
  ></ChildComponent>

  <br />
  <br />
  <h3>here we are going to display data from child component.</h3>
  <div>
    <div @test-data="handleDataFromChild"></div>
    <p>Data received from child: {{ receivedData }}</p>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  data() {
    return {
      receivedData: "",
      userDetail: {
        name: "Muhammad Naqash Aslam",
        email: "naqash.aslam@northbaysolutions.net",
      },
    };
  },
  methods: {
    handleDataFromChild(data) {
      // receivedData property with the data from the child
      this.receivedData = data;
    },
  },
};
</script>

<style>
h1 {
  color: brown;
}
</style>
