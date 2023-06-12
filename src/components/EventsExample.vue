<template>
<h1>Events Handling:</h1>
<p>we are performing <b>Click Event</b> here:
    <button v-on:click="mouseClick()">Click Me</button>
</p>
<p>we are performing <b>Click Event</b> by passing some data:
    <button v-on:click="getNamebyParam('Muhammad Naqash Aslam')">Click Me</button>
</p>
<p>we are performing <b>Double Click Event</b> here:
    <button v-on:dblclick="mouseDblClick()">Click Me</button>
</p>
</template>

<script>
export default {
    name: 'EventsExample',
    methods: {
        mouseClick() {
            alert('mouse single click event succesfully called....!');
        },
        getNamebyParam(name){
            alert('My Name is: '+ name);
        },
        mouseDblClick() {
            alert('mouse double click event succesfully called....!');
        },
    }
};
</script>

<style>
h1 {
    color: brown;
}
</style>
