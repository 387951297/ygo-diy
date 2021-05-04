<template>
  <div class="attribute">
    <el-image
      style="width: 44px; height: 44px"
      :src="src"
      fit="fill"
    ></el-image>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "card-attribute",
  components: {},
  props: {
    cardAcctribute: {
      validator(value) {
        return store.getters.cardAcctributeValues.indexOf(value) !== -1;
      },
      default() {
        return "god";
      },
    },
  },
  computed: {
    src() {
      return store.state.cardAcctribute.find(
        (x) => x.value == this.cardAcctribute
      ).src;
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.attribute {
  position: absolute;
  top: 35px;
  left: 380px;
}
</style>