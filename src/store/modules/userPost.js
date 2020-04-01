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
    userPosts: [],
    successAdd: false,
    successText: "Post added!"
  },
  mutations: {
    insertPosts(state, posts) {
      state.userPosts = posts;
    },
    setSuccess(state, truth) {
      state.successAdd = truth;
    },
    setSuccessText(state, text) {
      state.successText = text;
    }
  },
  actions: {
    async getUserPosts({ commit }, userId) {
      await apiClinet
        .get("http://localhost:3000/posts?userId=" + userId)
        .then(resp => {
          if (Array.isArray(resp.data)) {
            const posts = resp.data.reverse();
            commit("insertPosts", posts);
          }
        })
        .catch(error => {
          commit("setSuccess", true);
          commit(
            "setSuccessText",
            "Something goes wrong. Сontact our service center"
          );
          setTimeout(() => {
            commit("setSuccess", false);
          }, 3000);
          console.log(error);
        });
    },
    async createPost({ commit, dispatch, rootState }, newPost) {
      await apiClinet
        .post("http://localhost:3000/posts", newPost)
        .then(resp => {
          if (typeof resp.data == "object") {
            dispatch("getUserPosts", rootState.auth.user.id);
            commit("setSuccess", true);
            commit("setSuccessText", "Post created");
          }
        })
        .then(() => {
          setTimeout(() => {
            commit("setSuccess", false);
          }, 1000);
        })
        .catch(error => {
          commit("setSuccess", true);
          commit(
            "setSuccessText",
            "Something goes wrong. Сontact our service center"
          );
          setTimeout(() => {
            commit("setSuccess", false);
          }, 3000);
          console.log(error);
        });
    },
    async updatePost({ commit, dispatch, rootState }, updatePost) {
      await apiClinet
        .put(
          "http://localhost:3000/posts/" + updatePost.postId + "/",
          updatePost.params
        )
        .then(resp => {
          if (typeof resp.data == "object") {
            if (updatePost.postPage) {
              const params = {
                limit: 10,
                page: updatePost.currentPage
              };
              dispatch("fetchPosts", params, { root: true });
            } else {
              dispatch("getUserPosts", rootState.auth.user.id);
            }
            commit("setSuccess", true);
            commit("setSuccessText", "Post updated");
          }
        })
        .then(() => {
          setTimeout(() => {
            commit("setSuccess", false);
          }, 1000);
        })
        .catch(error => {
          commit("setSuccess", true);
          commit(
            "setSuccessText",
            "Something goes wrong. Сontact our service center"
          );
          setTimeout(() => {
            commit("setSuccess", false);
          }, 3000);
          console.log(error);
        });
    },
    async deletePost({ commit, dispatch, rootState }, deleteItem) {
      await apiClinet
        .delete("http://localhost:3000/posts/" + deleteItem)
        .then(resp => {
          if (typeof resp.data == "object") {
            dispatch("getUserPosts", rootState.auth.user.id);
            commit("setSuccess", true);
            commit("setSuccessText", "Post deleted");
          }
        })
        .then(() => {
          setTimeout(() => {
            commit("setSuccess", false);
          }, 1000);
        })
        .catch(error => {
          commit("setSuccess", true);
          commit(
            "setSuccessText",
            "Something goes wrong. Сontact our service center"
          );
          setTimeout(() => {
            commit("setSuccess", false);
          }, 3000);
          console.log(error);
        });
    },
    async updateClap({ dispatch }, updateClap) {
      await apiClinet
        .put(
          "http://localhost:3000/posts/" + updateClap.postId + "/",
          updateClap.params
        )
        .then(resp => {
          if (typeof resp.data == "object") {
            const params = {
              limit: 10,
              page: updateClap.currentPage
            };
            dispatch("fetchPosts", params, { root: true });
          }
        })
        .catch(error => {
          commit("setSuccess", true);
          commit(
            "setSuccessText",
            "Something goes wrong. Сontact our service center"
          );
          setTimeout(() => {
            commit("setSuccess", false);
          }, 3000);
          console.log(error);
        });
    }
  },
  getters: {
    allUserPost(state) {
      return state.userPosts;
    },
    getSuccess(state) {
      return state.successAdd;
    },
    getText(state) {
      return state.successText;
    }
  }
};
