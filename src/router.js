import Vue from "vue";
import Router from "vue-router";
import store from "./store/index";
import Home from "./views/Home.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import Posts from "./views/Posts";
import Resource from "./views/Resource.vue";
import NProgress from "nprogress";
Vue.use(Router);
const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next();
    return;
  }
  next("/auth/login");
};
let router = new Router({
  mode: "history",
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/auth/login",
      name: "login",
      component: Login
    },
    {
      path: "/auth/register",
      name: "register",
      component: Register
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts
    },
    {
      path: "/resources",
      name: "resources",
      component: Resource,
      beforeEnter: ifAuthenticated
    }
  ]
});
router.beforeEach(async (to, from, next) => {
  NProgress.start();

  next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
