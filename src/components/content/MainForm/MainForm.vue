<template>
  <!-- 主要控件 -->
  <div class="main-form">
    <el-card>
      <el-form
        ref="mainForm"
        :model="mainForm"
        label-width="80px"
      >
        <el-form-item label="卡片标题">
          <el-input v-model="mainForm.cardTitle"></el-input>
        </el-form-item>
        <el-form-item label="卡片类型">
          <el-input v-model="mainForm.cardType"></el-input>
        </el-form-item>
        <el-form-item label="卡片属性">
          <el-input v-model="mainForm.cardAcctribute"></el-input>
        </el-form-item>
        <el-form-item label="星级、阶级">
          <el-input v-model="mainForm.cardNumber"></el-input>
        </el-form-item>
        <el-form-item label="魔陷类型">
          <el-input v-model="mainForm.rightAttributeType"></el-input>
        </el-form-item>
        <el-form-item label="卡图">
          <el-input v-model="mainForm.innerImgSrc"></el-input>
        </el-form-item>
        <el-form-item label="卡包信息">
          <el-input v-model="mainForm.cardbagStr"></el-input>
        </el-form-item>
        <el-form-item label="种族信息">
          <el-input v-model="mainForm.raceStr"></el-input>
        </el-form-item>
        <el-form-item label="攻击力">
          <el-input v-model="mainForm.atkStr"></el-input>
        </el-form-item>
        <el-form-item label="防御力">
          <el-input v-model="mainForm.defStr"></el-input>
        </el-form-item>
        <el-form-item label="效果文本">
          <el-input v-model="mainForm.contentHtml"></el-input>
        </el-form-item>
         <el-form-item label="卡片id">
          <el-input v-model="mainForm.cardIdStr"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "main-form",
  components: {},
  props: {
    mainForm: {
      type: Object,
      default() {
        return {
          cardTitle: "",
          cardType: "normal",
          cardAcctribute: "light",
          cardNumber: 1,
          rightAttributeType: "normal",
          innerImgSrc: require("@/assets/img/inner.jpg"),
          cardbagStr: "",
          raceStr: "【】",
          atkStr: "",
          defStr: "",
          contentHtml: "",
          cardIdStr: "",
        };
      },
    },
  },
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
</style>