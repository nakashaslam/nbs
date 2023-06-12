<template>
<h1>Refs:</h1>
<h3>Refs are basically used to get or set the value of DOM.</h3>
<p>When user click the button,it will apply the focus on the respective input field.</p>
<input type="text" placeholder="username" ref="username" />
<button type="button" v-on:click="getFocus">Click Me</button>

<br>
<p>we can get the value of input field using refs.</p>
<input type="email" placeholder="email" ref="email" />
<button type="button" v-on:click="getValue">Click Me</button>

<br>
<p>we can also apply some styles to the input field using refs.</p>
<input type="number" placeholder="Phone" ref="phone" />
<button type="button" v-on:click="applyStyle">Click Me</button>


</template>

<script>
export default {
    name: 'RefsExample',
    methods: {
        getFocus() {
            this.$refs.username.focus();
        },

        getValue() {
            this.$refs.email.value;
        },
        applyStyle() {
            this.$refs.phone.style.color='red';
        },
        

    }
};
</script>

<style>
h1 {
    color: brown;
}
</style>
