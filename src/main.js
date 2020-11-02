import Vue from 'vue'

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 截图
import js_screen_shots from 'js_screen_shots';
Vue.prototype.$Canvas2Image = js_screen_shots.Canvas2Image;
Vue.prototype.$html2canvas = js_screen_shots.html2canvas;

import './assets/font/font.css';

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
