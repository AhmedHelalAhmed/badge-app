import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseCard from "./components/UI/BaseCard.vue";

const app = createApp(App);

/* register global components */
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

/* register global components */

app.mount("#app");
