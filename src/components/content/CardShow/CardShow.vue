<template>
  <div class="card-img">
    <card-type :card-type="cardType"></card-type>
    <card-title
      :card-type="cardType"
      :card-title="title"
    ></card-title>
    <card-attribute :card-acctribute="cardAcctribute"></card-attribute>
    <card-star
      v-if="showStar"
      :number="cardNumber"
      :card-type="cardType"
    ></card-star>
    <card-right-attribute
      v-if="showRightAttribute"
      :right-attribute-type="rightAttributeType"
    ></card-right-attribute>
    <card-inner-img :inner-img-src="innerImgSrc"></card-inner-img>
    <card-cardbag :cardbag-str="cardbagStr"></card-cardbag>
    <card-text
      :race-str="raceStr"
      :atk-str="atkStr"
      :def-str="defStr"
      :card-type="cardType"
      :content-html="contentHtml"
    ></card-text>
    <card-id :card-id-str="cardIdStr"></card-id>
    <card-copyright></card-copyright>
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
import CardCopyright from './CardCopyright';

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
    showStar() {
      switch (this.cardType) {
        case "magic":
        case "trap":
        case "derivative":
          return false;
        default:
          return true;
      }
    },
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
  data() {
    return {
      title: "土豆好吃",
      cardType: "magic",
      cardAcctribute: "light",
      cardNumber: 12,
      rightAttributeType: "normal",
      innerImgSrc: require("@/assets/img/inner.jpg"),
      cardbagStr: "YMP1-JP007",
      raceStr: "【魔法師族·同調／效果】",
      atkStr: "1000",
      defStr: "1000",
      contentHtml: `土豆好吃<br>這張卡不用同調召喚。<br>這張卡不用同調召喚。<br>這張卡不用同調召喚。<br>這張卡不用同調召喚。<br>這張卡不用同調召喚。<br>這張卡不用同調召喚。`,
      cardIdStr: "11111111",
    };
  },
};
</script>
<style scoped>
.card-img {
  position: relative;
  width: 465px;
  height: 677px;
}
</style>