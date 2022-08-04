import * as Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "../src/router/index.js";

const app = Vue.createApp(App);
app.use(router);
app.mount("#app");
