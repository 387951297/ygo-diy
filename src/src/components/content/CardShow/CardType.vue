<template>
  <el-image
    style="width: 465px; height: 677px"
    :src="src"
    fit="fill"
  ></el-image>
</template>

<script>
import store from "@/store";

export default {
  name: "card-type",
  components: {},
  props: {
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
      return store.state.cardType.find((x) => x.value == this.cardType).src;
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>