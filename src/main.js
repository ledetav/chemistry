import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vSelect from "vue-select";
import vModel from "@/views/testModel.vue";

createApp(App).component("v-select", vSelect).component('v-model', vModel).use(store).use(router).mount('#app') 