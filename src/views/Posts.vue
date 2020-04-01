<template>
  <div>
    <div class="container is-desktop post__container">
      <h2 class="is-size-2">We picked up interesting posts for you</h2>
      <div class="card post__card" v-for="post in allPost" :key="post.id">
        <PostItem :post="post" :mainPostPage="true" :userId="userId" />
      </div>
    </div>
    <Pagination v-if="addPagination" />
    <b-modal
      :active.sync="isActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <div class="notification is-primary">
        <p>{{ getText }}</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NProgress from "nprogress";
import store from "@/store/index";
//components
import PostItem from "../components/PostItem";
import Pagination from "../components/Pagination";
export default {
  name: "posts",
  components: {
    PostItem,
    Pagination
  },
  data() {
    return {
      userId: 0,
      isActive: false,
      addPagination: false
    };
  },
  beforeRouteEnter(to, from, next) {
    NProgress.start();
    store.dispatch("fetchPosts").then(() => {
      NProgress.done();
      next();
    });
  },
  computed: {
    ...mapGetters([
      "allPost",
      "isLoggedIn",
      "getUsrId",
      "getSuccess",
      "postCount",
      "getText"
    ])
  },
  watch: {
    getSuccess(newValue, oldValue) {
      this.isActive = newValue;
    }
  },
  methods: {
    // ...mapActions(["fetchPosts"])
  },
  mounted() {
    this.userId = this.getUsrId;
    // this.fetchPosts();
    setTimeout(() => {
      this.addPagination = this.postCount > 10 ? true : false;
    }, 1000);
  }
};
</script>

<style lang="scss">
.post__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
}
.post__card {
  margin: 20px 0;
  width: 80%;
}
</style>
