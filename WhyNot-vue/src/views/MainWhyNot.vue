<template>
<div>
		<Head/>
		<MainCom/>
		<Foot/>
</div>
</template>
<style lang="sass" scoped>
@import "../assets/sass/vars"
@import "../assets/sass/fonts"
</style>


<script>
import Head from "@/components/Head.vue";
import MainCom from "@/components/MainCom.vue";
import Foot from "@/components/Foot.vue";

export default {
	name: "MainWhyNot",
	components: {
		Head,
		MainCom,
		Foot
	}
};
</script>