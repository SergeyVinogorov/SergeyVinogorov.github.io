import Vue from "vue";
import Vuex from "vuex";
import post from "./modules/post";
import auth from "./modules/auth";
import userPost from "./modules/userPost";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    post,
    auth,
    userPost
  }
});
export default store;
