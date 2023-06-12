<template>
<h1>Interpolation:</h1>
<h3>It help us to use javascript variables, functions and methods in html templates by using double curly braces.</h3>

<h4>Perform Following Operations</h4>
<p>Arthimatic Operations: <b>10 + 10 = {{ 10+10 }}</b></p>
<b style="color:red">Note:Can we change the value inside the interpolation?? YES</b>
<p>To Check string length of <b>"NAQASH": {{ "Naqash".length}} </b></p>
<div>
    <p>we also perform following actions using interpolation e.g: <b>chartAt, endsWith, startsWith, indexOf, lastIndexOf etc</b></p>
</div>
<p>We can use data properties: <b>{{emailAddress}}</b></p>
<p>We can use functions to pass Mobile Number: <b>{{getMobileNos('0345-8716380')}}</b></p>
<br>
<br>

<h1>Mixin example</h1>
<p>To use mixin in multiple components</p>
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
import operations from './Mixins/operations';
export default {
    mixins: [operations],
    name: 'InterpolationExample',
    data() {
        return {
            emailAddress: 'naqash.aslam@northbaysolutions.net',
            counter_value:0,
            getMobileNos: function (mobileNos) {
                return mobileNos;
            }
        }
    },
    methods:{
        performOperations(operation){
        switch(operation){
          case 'add':
            this.counter_value = this.addition(this.counter_value,10);
            break;
            case 'subtract':
            this.counter_value = this.substraction(this.counter_value,10);
            break;
            case 'multiply':
            this.counter_value = this.multiplication(this.counter_value,10);
            break;
            case 'divide':
            this.counter_value = this.division(this.counter_value,10);
            break;
            default: 
            this.counter_value = 0;
              break;
        }
      }
    }
};
</script>

<style>
h1,
h3 {
    color: brown;
}
.custom {
    padding: 10px;
    background-color: brown;

}
</style>
