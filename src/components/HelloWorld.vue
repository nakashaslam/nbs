<template>
  <router-view></router-view>
  <div class="hello">
    <h1>Learning Vue Js for Front End</h1>
    <h3>Demo Project</h3>
    <p>We are trying to cover all the basic concepts of Vue.js with examples :</p>
    <ul>
      <li><router-link to="/interpolation">Interpolation</router-link></li>
      <li><router-link to="/methods"> Methods</router-link></li>
      <li><router-link to="/events"> Events</router-link></li>
      <li><router-link to="/two-Way-Binding"> Two way binding</router-link></li>
      <li><router-link to="/get-Form-Values"> Get Form Values</router-link></li>
      <li>
        <router-link to="/chkbox-radio-btns"> Checkbox / Radio buttons</router-link>
      </li>
      <li>
        <router-link to="/conditional-statements"> Conditional Statements</router-link>
      </li>
      <li><router-link to="/list"> For Loop</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/parent">Parent to child</router-link></li>
      <li><router-link to="/html-binding"> Html Binding</router-link></li>
      <li><router-link to="/class-binding"> Class binding</router-link></li>
      <li><router-link to="/refs"> Refs</router-link></li>
      <li><router-link to="/modifiers"> Modifiers</router-link></li>
      <li><router-link to="/computed-properties"> Computed properties</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/watchers">Watchers</router-link></li>
      <li><router-link to="/teleport"> Teleport</router-link></li>
      <li><router-link to="/basic-Crud"> Basic CRUD </router-link></li>
      <li><router-link to="/mixin-examples"> Mixin</router-link></li>
      <li><router-link to="/event-bus"> Event Bus</router-link></li>
      <li><router-link to="/slots"> Slots</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
