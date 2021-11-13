import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuelidate from 'vuelidate'
import './axios'
import '@/assets/style.css'

Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
