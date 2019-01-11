<template>
  <footer class="container-fluid">
    <div class="row link">
      <div class="col-6">
        <div class="row link-social">
          <div class="col-4 d-flex justify-content-between">
            <span>&copy;BUD</span>
            <div>
              <span class="icon-fb"></span>
              <span class="icon-you"></span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <span>© 2018 Anheuser-Busch InBev</span>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия пользования сайтом</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Foot"
};
</script>

<style lang="sass">
@import "../assets/sass/vars"
@import "../assets/sass/fonts"
.link
	font-size: 14px
	a
		text-decoration: none
		color: #fff
	.icon-fb
		font-family: $icon-font
		&:before
			content: "\e901"
			color: #fff
	.icon-you
		font-family: $icon-font
		margin-left: 1em
		&:before
			content: "\e903"
			color: #fff 
		</style>
