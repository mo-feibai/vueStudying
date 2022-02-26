import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Button, DatePicker,Row } from 'element-ui';

Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(Row)


new Vue({
  render: h => h(App),
}).$mount('#app')
