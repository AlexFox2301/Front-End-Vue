// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from "@/components/Header";
import Profil from "@/components/Profil";
// import Task from "@/components/Task";

Vue.config.productionTip = false;
Vue.component("header-links", Header);
Vue.component("profil-links", Profil);
// Vue.component("task-links", Task);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
