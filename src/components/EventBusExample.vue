<template>
<h1>Event Bus</h1>
<h3>Here we are performing Event Bus functionality</h3>
<button @click="performEventBus">Event Bus</button>
<br>
</template>

<script>
import {eventBus} from '../EventBus/event-bus.js';

export default {
    name: 'EventBusExample',
    methods:{
        performEventBus() {
        alert('Event Bus Called Successfully..!');
        // eventBus.emit('first_event_bus_emitted'); // without payload means we not passing anything in body.

        this.$router.push('/methods');
        setTimeout(() => {
            eventBus.emit('second_event_bus_emitted', { // but here we are going to pass object
                name: 'Muhammad Naqash Aslam',
                email: 'naqash.aslam@northbaysolutions.net'
            })
        }, 1000);
    }
    }
  
}
</script>

<style>
h1 {
    color: brown;
}

</style>
