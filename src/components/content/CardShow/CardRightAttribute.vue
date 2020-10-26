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
export default {
  name: "card-right-attribute",
  components: {},
  props: {
    rightAttributeType: {
      type: String,
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return (
          [
            "normal",
            "sustain",
            "quick",
            "equip",
            "environment",
            "ceremony",
            "counterattack",
          ].indexOf(value) !== -1
        );
      },
      default() {
        return 'normal';
      }
    }
  },
  computed: {
    typeSrc() {
      switch (this.rightAttributeType) {
        case "sustain":
          return require("@/assets/img/m1.png");
        case "quick":
          return require("@/assets/img/m2.png");
        case "equip":
          return require("@/assets/img/m3.png");
        case "environment":
          return require("@/assets/img/m4.png");
        case "ceremony":
          return require("@/assets/img/m5.png");
        case "counterattack":
          return require("@/assets/img/m6.png");
        default:
          return require("@/assets/img/m1.png");
      }
    },
    src() {
      return this.rightAttributeType == "normal"
        ? require("@/assets/img/s1.png")
        : require("@/assets/img/s2.png");
    },
  },
  data() {
    return {
      
    };
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