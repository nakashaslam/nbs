<template>
<h1>Computed Properties:</h1>
<h3>They don’t accept arguments and they are very handy for composing new data from existing sources, they get dynamic values based on other properties.</h3>
<br>
<br>
<h3>When to use computed properties?</h3>
<p>
<ul>
<li>You need to compose new data from existing data sources
</li>
<li>
You need to reference a value directly in your template
</li>
<li>
You call the same function more than once in your template</li>
</ul>
</p>
<p>normal way of performing calculation:</p>
<b>( this.dollar * this.pkr ) - this.discount</b>
<br>
<br>
<p>calculation is performed by using computed property.</p>
<h3>{{ getCalculation }}</h3>
</template>

  
<script>
export default {
    name: 'ComputedProperties',
    data(){
        return{
            dollar:285,
            pkr:100,
            discount:25
        }
    },
    computed:{
        getCalculation(){
            return ( this.dollar * this.pkr ) - this.discount;
        }
    }
};
</script>

  
<style>
h1 {
    color: brown;
}
</style>
