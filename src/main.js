// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as fb from "firebase";
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: "AIzaSyCU6z8yUacImkJLQMrO1WHSXLX40ZJ01Lg",
      authDomain: "ksusha-400c4.firebaseapp.com",
      projectId: "ksusha-400c4",
      storageBucket: "ksusha-400c4.appspot.com",
      messagingSenderId: "436390936482",
      appId: "1:436390936482:web:6f2f2eb9ade25afbe3bcfb"
    })
  }
})
