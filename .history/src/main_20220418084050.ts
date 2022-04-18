import "./lib/gulu.scss";
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "github-markdown-css";
import Markdown from './components/markdown.vue'

const app = createApp(App);
app.component('Markdown',Markdown)
app.use(router);
app.mount("#app");
