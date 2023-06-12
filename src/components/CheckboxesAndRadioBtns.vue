<template>
<h1>Checkboxes and Radio button values:</h1>
<h3>List of Technologies</h3>
<div>
    <div>
        <input type="checkbox" id="elixir" value="elixir" v-model="technologies" />
        <label for="elixir">Elixir</label>
    </div>

    <div>
        <input type="checkbox" id="vue" value="vue" v-model="technologies" />
        <label for="vue">VueJs</label>
    </div>

    <div>
        <input type="checkbox" id="react" value="react" v-model="technologies" />
        <label for="react">ReactJs</label>
    </div>

    <div>
        <input type="checkbox" id="angular" value="angular" v-model="technologies" />
        <label for="angular">Angular</label>

    </div>
</div>

<h3>Selected Technologies: {{ technologies }}</h3>
<br>
<br>
<h3>User Type?</h3>
<input type="radio" value="student" id="student" v-model="userType"/>
<label for="student">Student</label>

<input type="radio" value="professional" id="professional" v-model="userType"/>
<label for="professional">Professional</label>

<br>
<br>
<h3>Selected User Type: {{ userType }}</h3>

</template>

<script>
export default {
    name: 'CheckboxesAndRadioBtns',
    data() {
        return {
            technologies: [],
            userType: null
        }
    }
};
</script>

<style>
h1 {
    color: brown;
}
</style>
