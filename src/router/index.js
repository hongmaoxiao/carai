import Vue from 'vue';
import Router from 'vue-router';
import Dialog from '@/components/Dialog';

Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Dialog',
      component: Dialog,
    },
  ],
});
