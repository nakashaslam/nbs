<template>
  <h1>Class Binding:</h1>
  <h3>Simple way to bind css class</h3>
  <div>
  <h2 class="green">Muhammad Naqash Aslam</h2>
  </div>

  <br>
  <br>
  <h3>Bind Class dynamically from Data Property</h3>
  <div>
  <h2 :class="{green:colorFullClass}">Muhammad Naqash Aslam</h2>
  </div>
  <p>Here is a Apply button, Based on its click, Class will be add or remove from the above mentioned div</p>
  <button type="button" v-on:click="colorFullClass =! colorFullClass">Apply</button>
</template>

  
<script>
export default {
    name: 'ClassBinding',
    data(){
      return {
        colorFullClass:true
      }
    }
};
</script>

  
<style>
h1 {
    color: brown;
}

.green {
  background-color: green;
  color:white;
  padding:10px;
}
</style>
