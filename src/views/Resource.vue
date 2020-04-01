<template>
  <div>
    <div class="container is-desktop post__container">
      <h2 class="is-size-2">Here you can create</h2>
      <PostForm />
      <div class="card post__card" v-for="post in allUserPost" :key="post.id">
        <PostItem :post="post" :userId="userId" :claps="false" />
      </div>
    </div>
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

//components
import PostForm from "../components/PostForm";
import PostItem from "../components/PostItem";
export default {
  name: "Resource",
  data() {
    return {
      title: "",
      body: "",
      userId: 0,
      isActive: false
    };
  },

  components: {
    PostForm,
    PostItem
  },
  computed: {
    ...mapGetters([
      "allUserPost",
      "isLoggedIn",
      "getUsrId",
      "getSuccess",
      "getText"
    ])
  },
  watch: {
    getSuccess(newValue, oldValue) {
      this.isActive = newValue;
    }
  },
  methods: {
    ...mapActions(["getUserPosts", "updatePost"])
  },
  mounted() {
    this.userId = this.getUsrId;
    this.getUserPosts(this.userId);
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
