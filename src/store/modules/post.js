import axios from "axios";
import NProgress from "nprogress";

const apiClinet = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
apiClinet.interceptors.request.use(config => {
  NProgress.start();
  return config;
});
apiClinet.interceptors.response.use(response => {
  NProgress.done();
  return response;
});
export default {
  state: {
    posts: [],
    lengthPosts: 1,
    currentPage: 1
  },

  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    updateLength(state, lengthArray) {
      state.lengthPosts = lengthArray;
    },
    setCurrentPage(state, current) {
      state.currentPage = current;
    }
  },
  actions: {
    async allPostLength({ commit }) {
      await apiClinet
        .get("http://localhost:3000/posts")
        .then(resp => {
          if (Array.isArray(resp.data)) {
            const lengthArray = resp.data.length;
            commit("updateLength", lengthArray);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchPosts({ commit, dispatch }, params) {
      let pass = {};
      if (params == undefined) {
        (pass.limit = 10), (pass.page = 1);
      } else {
        (pass.limit = params.limit), (pass.page = params.page);
      }
      commit("setCurrentPage", pass.page);
      return await apiClinet
        .get(
          "http://localhost:3000/posts?_limit=" +
            pass.limit +
            "&_page=" +
            pass.page
        )
        .then(resp => {
          if (Array.isArray(resp.data)) {
            const posts = resp.data;
            commit("updatePosts", posts);
          }
        })
        .then(() => {
          dispatch("allPostLength");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    allPost(state) {
      return state.posts;
    },
    postCount(state) {
      return state.lengthPosts;
    },
    getCurrentPage(state) {
      return state.currentPage;
    }
  }
};
