import * as Vue from "vue";
// import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

// import the root component App from a single-file component.;

const app = Vue.createApp(App);
app.mount("#app");
