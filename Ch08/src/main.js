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

// router
import router from "@/routers/index.js";

const app = createApp(App);

registerPlugins(app);

app.use(router).mount("#app");
