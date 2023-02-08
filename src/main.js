import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeVue from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import LogIn from './components/LogIn.vue';
import AddVue from './components/Add.vue';
import UpdateVue from './components/Update.vue';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            name: 'HomeVue',
            component: HomeVue,
            path: '/'
        },
        {
            name: 'SignUp',
            component: SignUp,
            path: '/sign-up'
        },
        {
            name: 'LogIn',
            component: LogIn,
            path: '/login'
        },
        {
            name: 'AddVue',
            component: AddVue,
            path: '/add'
        },
        {
            name: 'UpdateVue',
            component: UpdateVue,
            path: "/update/:id"
        },
    ]
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')


// 3.0.1