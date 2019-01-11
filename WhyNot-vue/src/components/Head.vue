<template>
  <header>
    <b-container fluid>
      <div class="d-flex justify-content-end">
        <div class="language-whyNot">
          <span class="lang-rus">RUS</span>/
          <span class="lang-eng">ENG</span>
        </div>
      </div>
    </b-container>
  </header>
</template>
<script>
export default {
  name: "Head"
};
</script>
<style lang="sass">
@import "../assets/sass/vars"
@import "../assets/sass/fonts"
.language-whyNot
	font-family: $default-font
	padding: 1em
	color: #fff
	.lang-rus, .lang-eng
		cursor: pointer
		&:hover
			text-decoration: underline

</style>
