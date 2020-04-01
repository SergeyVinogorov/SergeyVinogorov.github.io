<template>
  <div class="container is-desktop">
    <div class="form-wrapper form-wrapper--custom">
      <form class="login" @submit.prevent="loginUser">
        <h2 class="is-size-2">Sign in</h2>
        <b-field for="login" label="Email" :label-position="labelPosition">
          <b-input required v-model="email" type="email" name="login" placeholder="Name" autofocus></b-input>
        </b-field>
        <b-field for="password" label="Password" :label-position="labelPosition">
          <b-input
            required
            v-model="password"
            type="password"
            name="password"
            placeholder="Name"
            autofocus
          ></b-input>
        </b-field>
        <hr />
        <div>
          <button class="button is-link" type="submit">Login</button>
        </div>
      </form>
    </div>
    <b-modal :active.sync="isActive" has-modal-card trap-focus aria-role="dialog" aria-modal>
      <div class="notification is-primary">
        <p>{{getText}}</p>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      labelPosition: "inside",
      isActive: false
    };
  },
  computed: {
    ...mapGetters(["authStatus", "getText"])
  },
  watch: {
    authStatus() {
      this.isActive = true;
      setTimeout(() => {
        this.isActive = false;
      }, 2000);
    }
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      const authReq = {
        email: this.email,
        password: this.password
      };
      this.login(authReq)
        .then(() => {
          if (this.authStatus == "success") {
            setTimeout(() => {
              this.$router.push("/resources");
            }, 3000);
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss">
.form-wrapper--custom {
  padding-bottom: 40px;
}
</style>>
