import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: (h) => h(App),
  vuetify: new Vuetify({
    icons: {
      iconfont: "mdi",
    },
  }),
}).$mount("#app");
