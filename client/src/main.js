import * as Vue from "vue";
// import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

const app = Vue.createApp(App);
app.mount("#app");
