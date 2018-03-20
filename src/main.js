// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ChartApp from './components/ChartAppComponent.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false
Vue.use(SuiVue);
const config = {
  url : 'http://progconfbot.herokuapp.com'
}
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App,  ChartApp},
  template: '<App/>',
  provide: {config}
})
