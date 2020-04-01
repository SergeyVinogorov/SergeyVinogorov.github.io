<template>
  <div>
    <header class="card-header">
      <p class="card-header-title">{{ this.post.title }}</p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>

    <div class="card-content">
      <div class="content">{{ post.description }}</div>
      <time>{{ getSinseDay(post.updateAt) }} {{getSinseDay(post.updateAt) == 1 ? "day ago" : "days ago"}}</time>
    </div>

    <footer class="card-footer">
      <div class="card-footer-item" v-if="claps">
        <b-tooltip :label="clapText" position="is-top" animated>
          <b-button
            class="button__clap"
            type="is-primary"
            outlined
            @click="accessClap ? addClap() : null"
          >
            <span class="icon is-small">
              <img src="../assets/clapping-svgrepo-com.svg" alt="clap for post" />
            </span>
          </b-button>
          <span class="claps">{{ post.claps > 0 ? post.claps : "" }}</span>
        </b-tooltip>
      </div>

      <div class="card-footer-item" v-if="isLoggedIn && userId == post.userId">
        <b-button type="is-link" @click="isActive = true">Edit</b-button>
      </div>
      <div class="card-footer-item" v-if="isLoggedIn && !claps">
        <b-button type="is-danger" @click="deletePostItem">Delete</b-button>
      </div>
    </footer>
    <b-modal :active.sync="isActive" has-modal-card trap-focus aria-role="dialog" aria-modal>
      <PostForm :update="true" :post="post" :mainPostPage="mainPostPage ? true : false" />
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostForm from "./PostForm";
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    },
    userId: {
      type: Number
    },
    claps: {
      type: Boolean,
      default: true
    },
    mainPostPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: false,
      success: false
    };
  },
  components: {
    PostForm
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getSuccess", "getUser", "getCurrentPage"]),
    accessClap() {
      if (this.isLoggedIn) {
        if (this.getUser.role == "writer") {
          if (this.getUser.id == this.post.userId) {
            return false;
          } else {
            return true;
          }
        }
        if (this.getUser.role == "reader") {
          return true;
        }
      } else {
        return false;
      }
    },
    clapText() {
      if (this.isLoggedIn) {
        if (this.getUser.role == "writer") {
          if (this.getUser.id == this.post.userId) {
            return "This is your post you couldn't clap";
          } else {
            return "Clap me if you like";
          }
        } else {
          return "Clap me if you like";
        }
      } else {
        return "Could you Login please! Before claps";
      }
    }
  },
  methods: {
    ...mapActions(["updateClap", "deletePost"]),
    getSinseDay(date) {
      let today = new Date();
      let passedDate = new Date(date);
      return Math.ceil((today - passedDate) / 86400000);
    },
    addClap() {
      const params = {
        ...this.post,
        claps: this.post.claps + 1
      };
      const postId = this.post.id;
      const currentPage = this.getCurrentPage;
      this.updateClap({ params, postId, currentPage });
    },
    deletePostItem() {
      const postId = this.post.id;
      this.deletePost(postId);
    }
  },
  mounted() {
    this.success = this.getSuccess;
  },
  beforeUpdate() {
    if (this.success != this.getSuccess) {
      if (this.getSuccess) {
        this.isActive = false;
      }
    }
  }
};
</script>
<style lang="scss">
.button__clap {
  align-self: center;
}
.claps {
  align-self: center;
  padding: 10px;
}
</style>