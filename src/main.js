import { createApp } from "vue";

import App from "./App.vue";
import TheHeader from "./components/TheHeader.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";

const app = createApp(App);

/* register global components */
app.component("the-header", TheHeader);
app.component("base-badge", BaseBadge);
app.component("badge-list", BadgeList);
app.component("user-info", UserInfo);
/* register global components */

app.mount("#app");
