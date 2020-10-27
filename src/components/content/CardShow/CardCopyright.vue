<template>
  <div
    class="card-copyright"
    :style="copyrightStyle"
  >{{copyrightStr}}<img
      :src="lm"
      class="copyright-img"
    /></div>
</template>

<script>
export default {
  name: "card-copyright",
  props: {
    cardType: {
      type: String,
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return (
          [
            "normal",
            "effect",
            "ceremony",
            "fuse",
            "homologue",
            "xyz",
            "magic",
            "trap",
            "derivative",
          ].indexOf(value) !== -1
        );
      },
      default() {
        return "derivative";
      },
    },
  },
  components: {},
  computed: {
    copyrightStyle() {
      switch (this.cardType) {
        case "xyz":
          return "color: #fff";
        default:
          return "";
      }
    },
  },
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