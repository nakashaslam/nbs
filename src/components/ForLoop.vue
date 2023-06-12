<template>
<h1>For Loop examples with different type of data:</h1>
<h3>Simple Array List:</h3>
<div>
    <ul>
        <li v-for="item in technologies" :key="item">
            {{ item }}
        </li>
    </ul>
</div>

<h3>User Detail Object:</h3>
<div>
    <ul>
        <li v-for="item in usersDetail" :key="item">
            {{ item.name }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'ForLoop',
    data() {
        return {
            technologies: ['elixir', 'phoenix', 'vueJs', 'reactJs', 'angularJs'],
            usersDetail: [{
                    name: 'Muhammad Naqash Aslam',
                    email: 'naqash.aslam@northbaysolutions.net'
                },
                {
                    name: 'Usama Nadeem Khan',
                    email: 'usama.nadeem@northbaysolutions.net'
                },
                {
                    name: 'Asad Khan',
                    email: 'asad.khan@northbaysolutions.net'
                },
                {
                    name: 'Haseeb Khan',
                    email: 'haseeb.Khan@northbaysolutions.net'
                }
            ]
        }
    }
};
</script>

<style>
h1 {
    color: brown;
}
</style>
