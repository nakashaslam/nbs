<template>
<h1>Mixin</h1>
<p>Here we are going to use multiple mixins in this component, to perform arithmatic operations</p>
<br>
<div class="custom">
    <h3 style="color:white !important;">{{ counter_value }}</h3>
</div>
<br>

<button @click="performOperations('add')">Add by 10</button> &nbsp;
<button @click="performOperations('subtract')">Subtract by 10</button>&nbsp;
<button @click="performOperations('multiply')">Multiply by 10</button>&nbsp;
<button @click="performOperations('divide')">Divide by 10</button>
</template>

<script>
import operations from '../../../the_site_demo/src/components/Mixins/operations.js';

export default {
    mixins: [operations],
    name: 'MixinExamples',
    data() {
        return {
            counter_value: 0
        }
    },
    methods: {
        performOperations(operation) {
            switch (operation) {
                case 'add':
                    this.counter_value = this.addition(this.counter_value, 10);
                    break;
                case 'subtract':
                    this.counter_value = this.substraction(this.counter_value, 10);
                    break;
                case 'multiply':
                    this.counter_value = this.multiplication(this.counter_value, 10);
                    break;
                case 'divide':
                    this.counter_value = this.division(this.counter_value, 10);
                    break;
                default:
                    this.counter_value = 0;
                    break;
            }
        }
    }
}
</script>

<style>
h1 {
    color: brown;
}

.custom {
    padding: 10px;
    background-color: brown;

}
</style>
