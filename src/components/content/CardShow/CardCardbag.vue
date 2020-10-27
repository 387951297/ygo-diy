<template>
  <div
    class="card-cardbag"
    :style="cardbagStyle"
  >{{cardbagStr}}</div>
</template>

<script>
export default {
  name: "card-cardbag",
  props: {
    cardbagStr: {
      type: String,
      default() {
        return "error cardbagStr";
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
  components: {},
  computed: {
    cardbagStyle() {
      switch (this.cardType) {
        case "xyz":
        case "trap":
          return "color: #fff";
        default:
          return "";
      }
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.card-cardbag {
  position: absolute;
  top: 486px;
  right: 48px;
  font-family: "ITCStoneSerif";
  font-size: 14px;
}
</style>