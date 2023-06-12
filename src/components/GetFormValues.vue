<template>
<h1>Get Form Input field values:</h1>
<input type="email" placeholder="Email Address" v-model="email" />
<br>
<br>
<input type="password" placeholder="Password" v-model="password" />
<br>
<br>
<button type="button" v-on:Click="getInputValues()">Get Values</button>
</template>

<script>
export default {
    name: 'GetFormValues',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        getInputValues() {
            console.warn(this.email, this.password);
        }
    }
};
</script>

<style>
h1 {
    color: brown;
}
</style>
