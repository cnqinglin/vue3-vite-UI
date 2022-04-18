import "./lib/gulu.scss";
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "github-markdown-css";
import markdown from './components/markdown.vue'

const app = createApp(App);
app.component('Markdown',markdown)
app.use(router);
app.mount("#app");
