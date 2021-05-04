<template>
  <div
    class="title"
    :style="titleStyle"
  >{{cardTitle}}</div>
</template>

<script>
import store from "@/store";

export default {
  name: "card-title",
  components: {},
  props: {
    cardTitle: {
      type: String,
      default() {
        return "cardTitle error";
      },
    },
    cardType: {
      type: String,
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return store.getters.cardTypeValues.indexOf(value) !== -1;
      },
      default() {
        return "derivative";
      },
    },
  },
  computed: {
    titleStyle() {
      switch (this.cardType) {
        case "xyz":
        case "magic":
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
.title {
  position: absolute;
  top: 42px;
  left: 42px;
  font-family: "DFPLiShuW5-B5";
  font-size: 29px;
  line-height: 29px;
}
</style>