<template>
  <el-image
    style="width: 465px; height: 677px"
    :src="src"
    fit="fill"
  ></el-image>
</template>

<script>
export default {
  name: "card-type",
  components: {},
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
  computed: {
    cardTypeObj() {
      return {
        normal: require("@/assets/img/0.png"),
        effect: require("@/assets/img/1.png"),
        ceremony: require("@/assets/img/2.png"),
        fuse: require("@/assets/img/3.png"),
        homologue: require("@/assets/img/4.png"),
        xyz: require("@/assets/img/5.png"),
        magic: require("@/assets/img/6.png"),
        trap: require("@/assets/img/7.png"),
        derivative: require("@/assets/img/8.png"),
      };
    },
    src() {
      for (const key in this.cardTypeObj) {
        if (this.cardType && key == this.cardType) {
          return this.cardTypeObj[key];
        }
      }
      return this.cardTypeObj["derivative"];
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>