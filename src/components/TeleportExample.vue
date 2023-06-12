<template>
<h1>Teleport:</h1>
<Teleport to="#footer">
<FooterExample></FooterExample>
</Teleport>
</template>

  
<script>
import FooterExample from './FooterExample.vue';
export default {
    name: 'TeleportExample',
    components:{
        FooterExample
    }
};
</script>

  
<style>
h1 {
    color: brown;
}
</style>
