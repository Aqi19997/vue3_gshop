import Vue from 'vue'
import App from './App.vue'
// 引入路由器并注册
import router from './router'
// 引入store
import store from './store'
// 引入Header组件
import Header from './components/Header/Header.vue'
// 引入star
import Star from './components/Star/Star.vue'
// 引入vee表单验证插件
import './vee-validate'
// 注册程全局组件(在任何组件中可以直接使用,可以叫公共组件)
Vue.component(Header.name, Header)
Vue.component(Star.name, Star)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store
})
