import Vue from 'vue'
import VueRouter from 'vue-router'
import GMap from '@/components/GMap'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap
    }
  ]
})