import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";

const app = createApp(App);

/* register global components */
app.component("base-badge", BaseBadge);
/* register global components */

app.mount("#app");
