<template>
  <div
    class="card-id"
    :style="idStyle"
  >{{cardIdStr}}</div>
</template>

<script>
import store from "@/store";

export default {
  name: "card-id",
  props: {
    cardIdStr: {
      type: String,
      default() {
        return "";
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
  components: {},
  computed: {
    idStyle() {
      switch (this.cardType) {
        case "xyz":
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
.card-id {
  position: absolute;
  bottom: 16px;
  left: 21px;
  font-family: "ITCStoneSerif";
  font-size: 14px;
}
</style>