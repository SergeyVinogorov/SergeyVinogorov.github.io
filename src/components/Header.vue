<template>
  <header>
    <div class="container is-fullhd">
      <b-navbar>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="../assets/medium-seeklogo.com.svg" alt="My medium logo" />
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item>
            <router-link to="/">Home</router-link>
          </b-navbar-item>
          <b-navbar-item>
            <router-link to="/posts">Posts</router-link>
          </b-navbar-item>
          <b-navbar-item v-if="isLoggedIn">
            <router-link to="/resources">Write / Edit post</router-link>
          </b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item tag="div">
            <div class="buttons">
              <a
                class="button"
                :class="isLoggedIn ? 'is-primary' : 'is-light'"
                @click="logoutUser"
                v-if="isLoggedIn"
              >
                <strong>Sign out</strong>
              </a>
              <a class="button" href="/auth/register" v-if="!isLoggedIn">
                <strong>Sign up</strong>
              </a>
              <a
                class="button"
                :class="isLoggedIn ? 'is-light' : 'is-primary'"
                href="/auth/login"
                v-if="!isLoggedIn"
                >Log in</a
              >
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["isLoggedIn"])
  },

  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout().then(() => {
        this.$router.push("/auth/login");
      });
    }
  }
};
</script>
<style>
#nav a.router-link-exact-active {
  color: #7957d5;
}
</style>
