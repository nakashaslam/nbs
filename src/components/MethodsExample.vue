<template>
<h1>Methods:</h1>
<p>here we are showing user name via Method Properties <b style="color:brown">without</b> Params: <b>{{ getUserName() }}</b></p>
<p>here we are showing user name via Method Properties <b style="color:brown">with</b> Params: <b>{{ getUserEmail('naqash.aslam@northbaysolutions.net') }}</b></p>
<p>here we are showing user detail via Method Properties: <b>{{ getUserDetail() }}</b></p>
<p>if we have to display only one property from detail object: <b>{{ getUserDetail().name }}</b></p>
<p>we can also use data property in methods, e.g displaying <b>Designation</b> nos from data property in methods using <b style="color:brown">THIS</b> keyword: <b>{{ getUserDetail().designation }}</b></p>
<br>
<br>
<h3>here we are going to display an Object using Event Bus</h3>
<p>{{ userObject }}</p>
</template>

<script>
import { eventBus } from '../EventBus/event-bus.js';
export default {
    name: 'MethodsExample',
    data(){
        return{
            designation:'Principal Software Engineer',
            userObject: {}
        }
    },
    methods: {
        getUserName() {
            return 'Muhammad Naqash Aslam'
        },
        getUserEmail(email) {
            return email
        },
        getUserDetail(){
            return {
                name:'Muhammad Naqash Aslam',
                email:'naqash.aslam@northbaysolutions.net',
                designation: this.designation,
            }
        }
    },
    mounted(){
        eventBus.on('second_event_bus_emitted',(data)=>{
            console.log('is any data coming from mixin comp to Methods Comp', data);
            this.userObject = data;

        });
    }
};
</script>

<style>
h1 {
    color: brown;
}
</style>
