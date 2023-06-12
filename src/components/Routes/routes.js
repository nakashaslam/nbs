import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from '../../components/HelloWorld.vue'
import InterpolationExample from '../../components/InterpolationExample.vue'
import MethodsExample from '../../components/MethodsExample.vue'
import EventsExample from '../EventsExample.vue'
import TwoWayBinding from '../../components/TwoWayBinding.vue'
import GetFormValues from '../../components/GetFormValues.vue'
import ForLoop from '../../components/ForLoop.vue'
import HtmlBinding from '../../components/HtmlBinding.vue'
import ClassBinding from '../../components/ClassBinding.vue'
import RefsExample from '../../components/RefsExample.vue'
import FormModifiers from '../../components/FormModifiers.vue'
import ComputedProperties from '../../components/ComputedProperties.vue'
import WatchersExample from '../../components/WatchersExample.vue'
import SlotsExample from '../../components/SlotsExample.vue'
import TeleportExample from '../../components/TeleportExample.vue'
import SimpleForm from '../../components/SimpleForm.vue'
import ConditionalStatements from '../../components/ConditionalStatements.vue'
import CheckboxesAndRadioBtns from '../../components/CheckboxesAndRadioBtns.vue'
import ChildComponent from '../../components/ChildComponent.vue'
import ParentComponent from '../../components/ParentComponent.vue'
import BasicCrud from '../../components/BasicCrud.vue'
import MixinExamples from '../../components/MixinExamples.vue'
import EventBusExample from '../EventBusExample.vue'


const routes = [
    {
        name: 'HelloWorld',
        path: '/',
        component: HelloWorld
    },
    {
        name: 'InterpolationExample',
        path: '/interpolation',
        component: InterpolationExample
    },
    {
        name: 'MethodsExample',
        path: '/methods',
        component: MethodsExample
    },
    {
        name: 'EventsExample',
        path: '/events',
        component: EventsExample
    },
    {
        name: 'TwoWayBinding',
        path: '/two-Way-Binding',
        component: TwoWayBinding
    },
    {
        name: 'GetFormValues',
        path: '/get-Form-Values',
        component: GetFormValues
    },
    {
        name: 'ForLoop',
        path: '/list',
        component: ForLoop
    },
    {
        name: 'HtmlBinding',
        path: '/html-binding',
        component: HtmlBinding
    },
    {
        name: 'ClassBinding',
        path: '/class-binding',
        component: ClassBinding
    },
    {
        name: 'RefsExample',
        path: '/refs',
        component: RefsExample
    },
    {
        name: 'FormModifiers',
        path: '/modifiers',
        component: FormModifiers
    },
    {
        name: 'ComputedProperties',
        path: '/computed-properties',
        component: ComputedProperties
    },
    {
        name: 'WatchersExample',
        path: '/watchers',
        component: WatchersExample
    },
    {
        name: 'SlotsExample',
        path: '/slots',
        component: SlotsExample
    },
    {
        name: 'TeleportExample',
        path: '/teleport',
        component: TeleportExample
    },
    {
        name: 'SimpleForm',
        path: '/simple-form',
        component: SimpleForm
    },
    {
        name: 'ConditionalStatements',
        path: '/conditional-statements',
        component: ConditionalStatements
    },
    {
        name: 'CheckboxesAndRadioBtns',
        path: '/chkbox-radio-btns',
        component: CheckboxesAndRadioBtns
    },
    {
        name: 'ChildComponent',
        path: '/child',
        component: ChildComponent
    },
    {
        name: 'ParentComponent',
        path: '/parent',
        component: ParentComponent
    },
    {
        name: 'BasicCrud',
        path: '/basic-Crud',
        component: BasicCrud
    },
    {
        name: 'MixinExamples',
        path: '/mixin-examples',
        component: MixinExamples
    },
    {
        name: 'EventBusExample',
        path: '/event-bus',
        component: EventBusExample
    },
    {
        name: 'ChildComponent',
        path: '/childToParent',
        component: ChildComponent
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;