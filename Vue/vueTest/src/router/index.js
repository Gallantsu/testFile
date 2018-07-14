import Vue from 'vue'
import Router from 'vue-router'
import simple from '@/components/Simple'
import functionalComponent from '@/components/FunctionalComponent'

Vue.use(Router)

Vue.component("functionalComponent",functionalComponent);

Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  }
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'simple',
      component: simple
    }
  ]
})
