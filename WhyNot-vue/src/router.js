import Vue from "vue";
import Router from "vue-router";
import album from "@/views/album.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/album",
      name: "album",
      component: album
    }
  ]
});
