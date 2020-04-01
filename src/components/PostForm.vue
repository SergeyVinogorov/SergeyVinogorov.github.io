<template>
  <div class="createForm">
    <form @submit.prevent="update ? submitUpdate() : submit()">
      <b-field
        for="title"
        label="Title of post"
        :label-position="labelPosition"
      >
        <b-input
          id="title"
          type="text"
          v-model="title"
          required
          autofocus
        ></b-input>
      </b-field>
      <b-field
        for="bodyPost"
        label="Your awesome novel"
        :label-position="labelPosition"
      >
        <b-input
          id="bodyPost"
          v-model="body"
          required
          type="textarea"
        ></b-input>
      </b-field>
      <div class="control">
        <button class="button is-link" type="submit">
          {{ update ? "Save" : "Add new post" }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostForm",
  props: {
    update: {
      type: Boolean,
      reguired: true
    },
    post: {
      type: Object
    },
    mainPostPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: "",
      body: "",
      labelPosition: "on board",
      userId: 0
    };
  },
  computed: {
    ...mapGetters(["getUsrId", "getSuccess", "getCurrentPage"])
  },
  methods: {
    ...mapActions(["createPost", "updatePost"]),
    async submit() {
      await this.createPost({
        title: this.title,
        description: this.body,
        id: Date.parse(Date()),
        claps: 0,
        createdAt: Date(),
        updateAt: Date(),
        userId: this.userId
      });
      this.title = this.body = "";
    },
    submitUpdate() {
      const params = {
        ...this.post,
        title: this.title,
        description: this.body,
        updateAt: new Date()
      };
      const postId = this.post.id;
      if (this.mainPostPage) {
        const postPage = this.mainPostPage;
        const currentPage = this.getCurrentPage;
        this.updatePost({ params, postId, postPage, currentPage });
      } else {
        this.updatePost({ params, postId });
      }
      this.title = this.body = "";
    }
  },
  mounted() {
    if (this.update) {
      this.title = this.post.title;
      this.body = this.post.description;
    }
    this.success = this.getSuccess;
  },
  created() {
    this.userId = this.getUsrId;
  }
};
</script>
<style lang="scss">
.createForm {
  width: 80%;
  min-width: 500px;
  border-radius: 4px;
  padding: 40px;
  position: relative;
  background-color: #ffffff;
  color: #363636;
}
</style>
