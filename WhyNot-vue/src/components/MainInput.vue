<template>
  <b-row>
    <b-col md="10" offset-md="2">
      <b-row>
        <b-col>
          <b-row>
            <ReuseInput/>
            <b-row>
              <b-col cols="6">
                <input type="text" placeholder="КОД">
              </b-col>
              <b-col cols="6">
                <input type="text" placeholder="ДАТА ЗАПЛЫВА*">
              </b-col>
              <b-col cols="6">
                <b-row>
                  <b-col cols="2">
                    <span v-on:click="checkMark" class="check-confirm"></span>
                  </b-col>
                  <b-col cols="10">
                    <p>
                      Нажимая &laquo;Подать заявку&raquo;, я принимаю все условия
                      <a
                        href="#"
                      >Согласия на обработку персональных данных</a> и
                      <a href="#">Обязательства об отказе от претензий</a>.
                    </p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="6">
                <button>ПОДАТЬ ЗАЯВКУ</button>
              </b-col>
            </b-row>
          </b-row>
        </b-col>
        <b-col>
          <button>ВТОРОЙ ГОСТЬ</button>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
import ReuseInput from "@/components/ReuseInput.vue";
export default {
  name: "MainInput",
  components: {
    ReuseInput: ReuseInput
  },
  methods: {
    checkMark: function(ev) {
      if (ev.target.className === "check-confirm") {
        ev.target.classList.toggle("checked");
      }
    }
  }
};
</script>
<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.col-6
	padding-right: 0
	padding-left: 8px
	margin-top: 8px
	button
		background-color: #002F63
		width: 100%
		color: #fff
		border: none
		padding: 8px
	p
		font-size: 8px
		color: #fff
		a
			color: #fff
			text-decoration: underline
	.check-confirm
		width: 25px
		height: 25px
		border: 1px solid #fff
		display: block
		margin-top: 40%
		cursor: pointer
		position: relative
	.checked
		&:before
			content: '\2714'
			position: absolute
			сolor: $blue-whyNot
			left: 20%
		// &:after
		// 	content: ''
		// 	position: absolute
		// 	width: 20px
		// 	height: 2px
		// 	background-color: $blue-whyNot
		// 	transform: rotate(-45deg)
		// 	top: 45%
		// 	left: 5%
input
	padding: 6px 8px
	width: 100%
	&::placeholder
		font-size: 12px
		color: #002F63
		opacity: 0.5
</style>
