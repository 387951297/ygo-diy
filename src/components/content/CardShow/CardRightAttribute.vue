<template>
  <div class="card-right-attribute">
    <img
      class="card-right-attribute-item"
      :src="src"
      object-fit="contain"
    />
    <img
      v-if="rightAttributeType != 'normal'"
      class="card-right-attribute-type"
      :src="typeSrc"
      object-fit="contain"
    />
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "card-right-attribute",
  components: {},
  props: {
    rightAttributeType: {
      type: String,
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return store.getters.rightAttributeTypeValues.indexOf(value) !== -1;
      },
      default() {
        return "normal";
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
    typeSrc() {
      return store.state.rightAttributeType.find(
        (x) => x.value == this.rightAttributeType
      ).src;
    },
    src() {
      let src = "";
      if (this.cardType == "magic") {
        src =
          this.rightAttributeType == "normal"
            ? require("@/assets/img/s1.png")
            : require("@/assets/img/s2.png");
      } else if (this.cardType == "trap") {
        src =
          this.rightAttributeType == "normal"
            ? require("@/assets/img/t1.png")
            : require("@/assets/img/t2.png");
      }
      return src;
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.card-right-attribute {
  position: absolute;
  top: 86px;
  right: 56px;
}
.card-right-attribute-item {
  height: 26px;
}
.card-right-attribute-type {
  position: absolute;
  top: 5px;
  right: 6px;
  height: 23px;
}
</style>