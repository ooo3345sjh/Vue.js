/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import router from "./routers/index.js";
import store from "./store/index.js";
import axios from "axios";

const app = createApp(App);

registerPlugins(app);

app.use(router).use(store).mount("#app");

// axios 전역 설정
// axios.defaults.baseURL = "http://localhost"; // 개발용
axios.defaults.baseURL = "http://junghyun.site:8787"; // 배포용
