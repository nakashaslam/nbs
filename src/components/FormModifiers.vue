<template>
<h1>Form Modifiers:</h1>

<input type="number" placeholder="Mobile" v-model.number="inputText"/>
<h3>input type value is:<b>{{ typeof(inputText) }}</b></h3>
<br>
<hr>
<br>
<h3>Slot is displaying below:</h3>
<SlotsExample>
</SlotsExample>
</template>

  
<script>
import SlotsExample from './SlotsExample.vue';
export default {
    name: 'FormModifiers',
    data(){
        return {
            inputText:'',          
        }
    },
    components:{
        SlotsExample,
    }
};
</script>

  
<style>
h1 {
    color: brown;
}
</style>
