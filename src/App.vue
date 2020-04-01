<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <div id="nav">
        <Header />
      </div>
    </transition>
    <transition name="view">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer";

export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    next();
  },
  components: {
    Header,
    Footer
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },

  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Suranna&display=swap");

#app {
  font-family: "Suranna", Georgia, Cambria, "Times New Roman", Times, serif,
    Geneva, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 0, 0, 0.84);
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.view-enter-active,
.view-leave-active {
  transition: opacity 0.5 easy-in-out, transform 0.5s ease;
}
.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter,
.view-leave-to {
  opacity: 0;
}
.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>
