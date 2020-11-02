<template>
  <!-- 完整的卡片显示 -->
  <div
    class="card-img"
    id="card-img"
  >
    <!-- 卡片类型 -->
    <card-type :card-type="cardType"></card-type>
    <!-- 卡片标题 -->
    <card-title
      :card-type="cardType"
      :card-title="cardTitle"
    ></card-title>
    <!-- 卡片属性 -->
    <card-attribute :card-acctribute="cardAcctribute"></card-attribute>
    <!-- 星级、阶级 -->
    <card-star
      v-if="showStar"
      :number="cardNumber"
      :card-type="cardType"
    ></card-star>
    <!-- 魔陷类型 -->
    <card-right-attribute
      v-if="showRightAttribute"
      :right-attribute-type="rightAttributeType"
    ></card-right-attribute>
    <!-- 卡图 -->
    <card-inner-img :inner-img-src="innerImgSrc"></card-inner-img>
    <!-- 卡包信息 -->
    <card-cardbag
      :cardbag-str="cardbagStr"
      :card-type="cardType"
    ></card-cardbag>
    <!-- 卡片文本 -->
    <card-text
      :race-str="raceStr"
      :atk-str="atkStr"
      :def-str="defStr"
      :card-type="cardType"
      :content-html="contentHtml"
    ></card-text>
    <!-- 卡片id -->
    <card-id
      :card-id-str="cardIdStr"
      :card-type="cardType"
    ></card-id>
    <!-- 版权信息 -->
    <card-copyright :card-type="cardType"></card-copyright>
  </div>
</template>

<script>
import CardType from "./CardType";
import CardTitle from "./CardTitle";
import CardAttribute from "./CardAttribute";
import CardStar from "./CardStar";
import CardRightAttribute from "./CardRightAttribute";
import CardInnerImg from "./CardInnerImg";
import CardCardbag from "./CardCardbag";
import CardText from "./CardText";
import CardId from "./CardId";
import CardCopyright from "./CardCopyright";

export default {
  name: "card-show",
  components: {
    CardType,
    CardTitle,
    CardAttribute,
    CardStar,
    CardRightAttribute,
    CardInnerImg,
    CardCardbag,
    CardText,
    CardId,
    CardCopyright,
  },
  computed: {
    // 是否显示星级、阶级
    showStar() {
      switch (this.cardType) {
        case "magic":
        case "trap":
          return false;
        default:
          return true;
      }
    },
    // 是否显示魔陷类型
    showRightAttribute() {
      switch (this.cardType) {
        case "magic":
        case "trap":
          return true;
        default:
          return false;
      }
    },
  },
  props: {
    cardTitle: {
      type: String,
      default() {
        return "error cardTitle";
      },
    },
    cardType: {
      type: String,
      default() {
        return "magic";
      },
    },
    cardAcctribute: {
      type: String,
      default() {
        return "light";
      },
    },
    cardNumber: {
      type: Number,
      default() {
        return 1;
      },
    },
    rightAttributeType: {
      type: String,
      default() {
        return "normal";
      },
    },
    innerImgSrc: {
      type: String,
      default() {
        return require("@/assets/img/inner.jpg");
      },
    },
    cardbagStr: {
      type: String,
      default() {
        return "error cardbagStr";
      },
    },
    raceStr: {
      type: String,
      default() {
        return "【】";
      },
    },
    atkStr: {
      type: String,
      default() {
        return "1000";
      },
    },
    defStr: {
      type: String,
      default() {
        return "1000";
      },
    },
    contentHtml: {
      type: String,
      default() {
        return "error contentHtml";
      },
    },
    cardIdStr: {
      type: String,
      default() {
        return "11111111";
      },
    },
  },
  data() {
    return {};
  },
  async mounted() {},
};
</script>
<style scoped>
.card-img {
  position: relative;
  width: 465px;
  height: 677px;
}
</style>