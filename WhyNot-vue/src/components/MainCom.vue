<template>
  <main>
    <b-row>
      <b-col md="4" offset-md="2">
        <h1>BUDBOAT</h1>
        <descripter :descript="descript" class="main-heading-two"></descripter>
        <router-link to="/album">ФОТООТЧЕТ</router-link>
      </b-col>
    </b-row>
    <MainInput/>
  </main>
</template>
<script>
import descripter from "@/components/descripter.vue";
import MainInput from "@/components/MainInput.vue";
export default {
  name: "MainCom",
  data: function() {
    return {
      descript: true
    };
  },
  components: {
    descripter,
    MainInput
  }
};
</script>
<style lang="sass" scoped>
h1
	color: #fff
	font-size: 72px
	position: relative
	&:before
		content: '#'
		color: #fff
		position: absolute
		left: -12%
a
	color: #fff
	text-decoration: underline
	&:hover
		color: #fff
.main-heading-two
	height: 200px

</style>
