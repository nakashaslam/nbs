<template>
<h1>Conditional Statements:</h1>
<h3>If else Statment</h3>
<p v-if="show">here is the paragraph, that will be show / hide based on condition, using single button click.</p>

<button type="button" v-on:click="show=!show">Toggle</button>
</template>

<script>
export default {
    name: 'ConditionalStatements',
    data() {
        return {
            show: true
        }
    }
};
</script>

<style>
h1 {
    color: brown;
}
</style>
