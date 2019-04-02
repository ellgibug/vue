require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';
import StoreData from './store';
import MainApp from './components/MainApp';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes,
    mode: 'history'
});

// Axios.interceptors.response.use(null, (error => {
//     if(error.response.status == 401){
//
//         // store.commit('logout');
//         // route.push('/login');
//     }
// }));

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    }
});
