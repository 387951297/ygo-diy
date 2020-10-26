<template>
  <div class="card-copyright">{{copyrightStr}}<img
      :src="lm"
      class="copyright-img"
    /></div>
</template>

<script>
export default {
  name: "card-copyright",
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      copyrightStr: "©高橋和希 スタジオ・ダイス /集英社",
      lm: require("@/assets/img/lm.jpg"),
    };
  },
};
</script>
<style scoped>
.card-copyright {
  position: absolute;
  bottom: 17px;
  right: 21px;
  font-family: "MS UI Gothic";
  font-size: 12px;
}
.copyright-img {
  width: 23px;
  position: relative;
  top: 2px;
  left: 4px;
}
</style>