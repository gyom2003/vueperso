import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import ReservationComponent from './Reservation.vue';
import VueRouter from 'vue-router';
import LayoutVue from './Layout.vue';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', 
  routes: [
    { path: '/', component: LayoutVue },
    { path: '*', redirect: '/'},
    { path: '/reservation', component: ReservationComponent },
  ]

})

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app');
