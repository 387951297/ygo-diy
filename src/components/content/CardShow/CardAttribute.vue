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
import dark from "@/assets/img/a0.png";
import light from "@/assets/img/a1.png";
import dirt from "@/assets/img/a2.png";
import wind from "@/assets/img/a3.png";
import water from "@/assets/img/a4.png";
import fire from "@/assets/img/a5.png";
import god from "@/assets/img/a6.png";
import magic from "@/assets/img/magic.png";
import trip from "@/assets/img/trip.png";
export default {
  name: "card-attribute",
  components: {},
  props: {
    cardAcctribute: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return (
          ["dirt", "water", "fire", "wind", "light", "dark", "god",'magic','trip'].indexOf(
            value
          ) !== -1
        );
      },
    },
  },
  computed: {
    cardAcctributeObj() {
      return {
        dirt,
        water,
        fire,
        wind,
        light,
        dark,
        god,
        magic,
        trip,
      };
    },
    src() {
      for (const key in this.cardAcctributeObj) {
        if (this.cardAcctribute && key == this.cardAcctribute) {
          return this.cardAcctributeObj[key];
        }
      }
      return this.cardAcctributeObj["god"];
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