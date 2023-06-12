<template>
<h1>Html Binding:</h1>
<h3>{{ title }}</h3>
<div v-html="tag"></div>
</template>

  
<script>
export default {
    name: 'HtmlBinding',
    data(){
        return {
            title:'below text is basically not a string value. Its an html "<h2>NAQASH</h2>"',
            tag:'<h2>NAQASH</h2>'
        }
    }
};
</script>

  
<style>
h1 {
    color: brown;
}
</style>
