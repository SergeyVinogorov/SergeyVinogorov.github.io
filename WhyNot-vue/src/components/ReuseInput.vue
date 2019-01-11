<template>
  <b-row>
    <b-col cols="6" offset="6" class="wrap-nikname">
      <span class="main-nikname">Достаточно написать свой никнейм</span>
    </b-col>
    <b-col cols="6">
      <input type="text" placeholder="ИМЯ*">
    </b-col>
    <b-col cols="6">
      <input type="text" placeholder="INSTAGRAM">
    </b-col>
    <b-col cols="6">
      <input type="text" placeholder="ФАМИЛИЯ*">
    </b-col>
    <b-col cols="6">
      <input type="text" placeholder="E-MAIL*">
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "ReuseInput"
};
</script>
<style lang="sass" scoped>
.col-6
	padding-right: 0
	padding-left: 8px
	margin-top: 8px
.wrap-nikname
	display: flex
	justify-content: center
.main-nikname
	font-size: 12px
	color: #fff
input
	padding: 6px 8px
	width: 100%
	&::placeholder
		font-size: 12px
		color: #002F63
		opacity: 0.5
</style>
