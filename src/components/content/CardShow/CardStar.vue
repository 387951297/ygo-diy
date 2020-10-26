<template>
  <div class="star">
    <el-image
      class="star-item"
      :src="src"
      fit="fill"
      v-for="item in number"
      :key="item"
    ></el-image>
  </div>
</template>

<script>
export default {
  name: "card-star",
  components: {},
  props: {
    number: {
      type: Number,
      default() {
        return 0;
      },
    },
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
    src() {
      switch (this.cardType) {
        case "normal":
        case "effect":
        case "ceremony":
        case "fuse":
        case "homologue":
          return require("@/assets/img/ls.png");
        case "xyz":
          return require("@/assets/img/ds.png");
          break;
        default:
          return "";
          break;
      }
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.star {
  position: absolute;
  top: 86px;
  right: 56px;
}
.star-item {
  width: 28px;
  height: 28px;
  margin-left: 1.6px;
}
</style>