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
import store from "@/store";
import dsSrc from "@/assets/img/ds.png";
import lsSrc from "@/assets/img/ls.png";

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
        return store.getters.cardTypeValues.indexOf(value) !== -1;
      },
      default() {
        return "derivative";
      },
    },
  },
  computed: {
    src() {
      let obj = store.state.cardType.find((x) => x.value == this.cardType);
      if (obj.value == "xyz") {
        return dsSrc;
      } else if (obj.type != "magicTrap") {
        return lsSrc;
      } else {
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