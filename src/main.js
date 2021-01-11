import Vue from 'vue'
import VueRouter from 'vue-router';
import store from './store';
import App from './App.vue'
import 'bulma/css/bulma.min.css';
import router from './router';

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  router,
  store, 
  render: (h) => h(App),
}).$mount('#app');
