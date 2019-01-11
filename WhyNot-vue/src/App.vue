<template>
  <div id="app">
    <Head/>
    <b-container>
      <MainCom/>
    </b-container>
    <Foot/>
    <router-view/>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import MainCom from "@/components/MainCom.vue";
import Foot from "@/components/Foot.vue";

export default {
  name: "App",
  components: {
    Head,
    MainCom,
    Foot
  }
};
</script>

<style lang="sass" scoped>
@import "./assets/sass/vars"
@import "./assets/sass/fonts"
#app
	font-family: $default-font
	background-image: url('./assets/Group-8.jpg')
	background-repeat: no-repeat
	background-size: cover
	height: 100vh
	display: flex
	flex-direction: column
	justify-content: space-between
//@import "./assets/sass/media"
</style>
