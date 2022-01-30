import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false
// import plugins from './plugins'
// 应用插件
// Vue.use(plugins)
new Vue({
  render: h => h(App)
}).$mount("#app");