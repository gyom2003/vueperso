import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { FaCalendarChecO } from '@fortawesome/free-solid-svg-icons'

// library.add(FaCalendarChecO)
// Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app');
