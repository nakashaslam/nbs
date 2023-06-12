<template>
<h1>Two Way Binding:</h1>
<p>If we make any change in input field, it will affect the model property too.</p>
<input type="text" v-model="typingValue" placeholder="User Name"/>
<h3>Displaying input value here: {{ typingValue }}</h3>
</template>

  
<script>
export default {
    name: 'TwoWaybinding',
    data(){
        return{
            typingValue: ''
        }
    }
};
</script>

  
<style>
h1 {
    color: brown;
}
</style>
