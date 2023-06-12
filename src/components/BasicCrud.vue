<template>
<div>
<h3>User can search from list based on prefix</h3>
    <input v-model="prefix" placeholder="Search by First Name">
</div>
<br>

<div>
<h3>User can enter 5 records only.
</h3>
    <select size="5" v-model="selected">
        <option v-for="name in filteredNames" :key="name">{{ name }}</option>
    </select>
</div>

<h3>Simple Form</h3>
<br>

<input type="text" placeholder="First Name" v-model="first" />
<br>
<br>
<input type="text" placeholder="Last Name" v-model="last" />
<br>
<br>

<div class="buttons">
    <button @click="create">Create</button>
    <button @click="update">Update</button>
    <button @click="del">Delete</button>
</div>
</template>

<script>
export default {
    name: "BasicCrud",
    data() {
        return {
            names: ['Naqash Aslam', 'Waqas Aslam', 'Mustafa Naqash'],
            selected: '',
            prefix: '',
            first: '',
            last: ''
        }
    },
    computed: {
        filteredNames() {
            return this.names.filter((n) =>
                n.toLowerCase().startsWith(this.prefix.toLowerCase())
            )
        }
    },
    watch: {
        selected(name) {
            [this.last, this.first] = name.split(' ')
        }
    },
    methods: {
        create() {
            if (this.hasValidInput()) {
                const fullName = `${this.last}+' '+ ${this.first}`
                if (!this.names.includes(fullName)) {
                    this.names.push(fullName)
                    this.first = this.last = ''
                }
            }
        },
        update() {
            if (this.hasValidInput() && this.selected) {
                const i = this.names.indexOf(this.selected)
                this.names[i] = this.selected = `${this.last}, ${this.first}`
            }
        },
        del() {
            if (this.selected) {
                const i = this.names.indexOf(this.selected)
                this.names.splice(i, 1)
                this.selected = this.first = this.last = ''
            }
        },
        hasValidInput() {
            return this.first.trim() && this.last.trim()
        }
    }
};
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
