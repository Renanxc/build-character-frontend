import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/main.css'
import VeeValidate from 'vee-validate';


Vue.use(VeeValidate);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = process.env.BACKEND_ENDPOINT || 'localhost:8090';
Vue.http.headers.common['Authorization'] = process.env.AUTHORIZATION || 'Basic dXNlcjp1c2Vy';  
Vue.http.headers.common['X-Set-Ttl'] =process.env.TTL_EXPIRE_SESSION || '3600';  

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})