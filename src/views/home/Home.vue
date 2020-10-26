<template>
  <el-container>
    <el-main>
      <main-form :mainForm="mainForm"></main-form>
    </el-main>
    <el-aside width="">
      <el-card class="right-card">
        <card-show
          :card-title="mainForm.cardTitle"
          :card-type="mainForm.cardType"
          :card-acctribute="mainForm.cardAcctribute"
          :card-number="mainForm.cardNumber"
          :right-attribute-type="mainForm.rightAttributeType"
          :inner-img-src="mainForm.innerImgSrc"
          :cardbag-str="mainForm.cardbagStr"
          :race-str="mainForm.raceStr"
          :atk-str="mainForm.atkStr"
          :def-str="mainForm.defStr"
          :content-html="mainForm.contentHtml"
          :card-id-str="mainForm.cardIdStr"
        ></card-show>
      </el-card>
    </el-aside>
  </el-container>
</template>

<script>
import MainForm from "@/components/content/MainForm/MainForm";
import CardShow from "@/components/content/CardShow/CardShow";

export default {
  name: "Home",
  components: { MainForm, CardShow },
  data() {
    return {
      mainForm: {
        cardTitle: "123",
        cardType: "normal",
        cardAcctribute: "light",
        cardNumber: 1,
        rightAttributeType: "normal",
        innerImgSrc: require("@/assets/img/inner.jpg"),
        cardbagStr: "ABCD-C001",
        raceStr:"【魔法師族·同調／效果】",
        atkStr: '1111',
        defStr: '2222',
        contentHtml: 'abcd',
        cardIdStr: '11111112'
      },
    };
  },
};
</script>
<style scoped>
.right-card {
  margin-top: calc(10vh);
  margin-right: 30px;
}
</style>