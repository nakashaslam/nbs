<template>
<h1>Watchers:</h1>
<p>They allow us to react immediately and dynamically to changes in the system. If a watcher is added to an element, any time it changes, we can act on that change. While this may seem like an extreme case, it's a good example of how being able to react to changes can be useful.</p>
<br>
<br>
<h3>{{ count }}</h3>
<button v-on:click="count=count+1">+</button>
<button v-on:click="count=count-1">-</button>
</template>

  
<script>
export default {
    name: 'WatchersExample',
    data(){
        return {
            count:0
        }
    },
    watch:{
        count(){
            alert('count property value has changed..!')
        }
    }
};
</script>

  
<style>
h1 {
    color: brown;
}
</style>
