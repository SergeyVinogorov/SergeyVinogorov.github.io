<template>
  <h2>{{age}}&trade;.</h2>
</template>
<script>
export default {
  name: "descripter",
  props: {
    descript: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    age() {
      if (this.descript) {
        return "ВЕРТОЛЕТНАЯ ПЛОЩАДКА, БАР, ДЖАКУЗИ И ГИГАНТСКИЙ ЭКРАН ДЛЯ ПРОСМОТРА МАТЧЕЙ ЧЕМНПИОНАТА МИРА ПО ФУТБОЛУ FIFA 2018";
      }
      return "FIFA 2018";
    }
  }
};
</script>
<style lang="sass" scoped>
h2
	color: #fff
	font-size: 18px
	width: 418px

</style>
