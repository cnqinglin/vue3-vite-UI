import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import InpputDemo from "./components/InpputDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import { h } from "vue";
import Markdown from './components/markdown.vue'

const history = createWebHashHistory();

const x = path => {
  return h(Markdown,{'path':`../markdown/${path}.md`,key:Math.random()})
}

export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect:'/doc/intro' },
        { path: "intro", component: x('intro')},
        { path: "install", component:x('install') },
        { path: "use", component: x('use')},
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "input", component: InpputDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});
