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
    status: "",
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user")) || ""
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token) {
      state.status = "success";
      state.token = token;
    },
    auth_error(state) {
      state.status = "error";
    },
    insertUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },

  actions: {
    async login({ commit }, authReq) {
      commit("auth_request");
      await apiClinet
        .post("http://localhost:3000/auth/login", authReq)
        .then(resp => {
          if (typeof resp.data == "object") {
            const token = resp.data.access_token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            apiClinet.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token);
            commit("insertUser", user);
            commit("setSuccessText", "You are logged in!", {
              root: true
            });
          } else {
            commit(
              "setSuccessText",
              "Something goes wrong. Сontact our service center",
              {
                root: true
              }
            );
          }
        })
        .catch(err => {
          commit("auth_error");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          commit("setSuccessText", "Wrong login or password", {
            root: true
          });
          console.log(err);
        });
    },
    async register({ commit, dispatch }, user) {
      commit("auth_request");
      await apiClinet
        .post("http://localhost:3000/users", user)
        .then(resp => {
          console.log(resp.data);

          if (typeof resp.data == "object") {
            let params = {
              email: resp.data.email,
              password: resp.data.password
            };
            console.log(params);
            dispatch("login", params, { root: true });
            // this.login(params);
          }
          // const token = resp.data.token;
          // const user = resp.data.user;
          // localStorage.setItem("token", token);
          // localStorage.setItem("user", JSON.stringify(user));
          // apiClinet.defaults.headers.common["Authorization"] = token;
          // commit("auth_success", token, user);
        })
        .catch(err => {
          commit("auth_error", err);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        });
    },
    logout({ commit }) {
      commit("logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      delete apiClinet.defaults.headers.common["Authorization"];
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUsrId: state => state.user.id,
    getUser: state => state.user
  }
};
