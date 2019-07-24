import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import FastClick from 'fastclick'
import toast from "./components/Toast";


Vue.config.productionTip = false

Vue.use(toast)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//初始化FastClick实例。在页面的DOM文档加载完成后
FastClick.attach(document.body)
FastClick.prototype.onTouchEnd = function(event) {
  if(event.target.hasAttribute("type") && event.target.getAttribute("type") == "text") {
    event.preventDefault();
    return false;
  }
}
