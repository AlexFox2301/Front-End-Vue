import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Resume from '@/components/Resume'
import Profil from "@/components/Profil";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/resume',
      name: 'Resume',
      component: Resume,
    },
    {
      path:'/profil',
      name: 'Profil',
      component: Profil,
    }
  ]
})
