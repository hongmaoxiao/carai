// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Button,
  Select,
  Input,
  Card,
} from 'element-ui';
import App from './App';
import router from './router';
import './assets/css/index.scss';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Select);
Vue.use(Input);
Vue.use(Card);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
