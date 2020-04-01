<template>
  <div class="container is-desktop main__container">
    <h2 class="is-size-2">Register</h2>
    <div class="form-wrapper form-wrapper--custom">
      <form @submit.prevent="registerUser">
        <b-field
          for="email"
          label="Email"
          :label-position="labelPosition"
          native-value="inside"
        >
          <b-input id="email" type="email" v-model="email" required></b-input>
        </b-field>
        <b-field
          for="password"
          label="Password"
          :label-position="labelPosition"
          native-value="inside"
        >
          <b-input
            id="password"
            type="password"
            v-model="password"
            required
          ></b-input>
        </b-field>
        <b-field
          for="password-confirm"
          label="Confirm Password"
          :label-position="labelPosition"
          native-value="inside"
        >
          <b-input
            id="password-confirm"
            type="password"
            v-model="password_confirmation"
            required
          ></b-input>
        </b-field>
        <div>
          <button class="button is-link" type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      labelPosition: "on board"
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      const params = {
        id: Date.parse(new Date()),
        email: this.email,
        password: this.password,
        role: "reader"
      };
      this.register(params)
        // .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss">
.form-wrapper {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>
