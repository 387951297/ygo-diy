<template>
  <!-- 主要控件 -->
  <div class="main-form">
    <el-card class="main-card">
      <el-collapse v-model="activeName">
        <el-collapse-item name="1">
          <template slot="title">
            <el-tag
              type="info"
              effect="dark"
            >卡片类别</el-tag>
          </template>
          <div class="card-center">
            <el-form
              ref="mainForm"
              :model="mainForm"
              label-width="auto"
              class="main-form-box"
            >
              <el-form-item label="">
                <el-radio-group v-model="mainForm.cardType">
                  <el-radio-button
                    v-for="item in cardTypeList"
                    :key="item.value"
                    :label="item.value"
                  >{{item.label}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <el-tag
              type="info"
              effect="dark"
            >具体参数</el-tag>
          </template>
          <div class="card-center">
            <el-form
              ref="mainForm"
              :model="mainForm"
              label-width="auto"
              class="main-form-box"
            >
              <el-form-item label="卡名">
                <el-input v-model="mainForm.cardTitle"></el-input>
              </el-form-item>
              <el-form-item
                label="属性"
                v-show="showCardAcctribute"
              >
                <el-radio-group v-model="mainForm.cardAcctribute">
                  <el-radio-button
                    v-for="item in cardAcctributeList"
                    :key="item.value"
                    :label="item.value"
                  >{{item.label}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item
                label="等级/阶级"
                v-show="showcardNumber"
              >
                <el-slider
                  v-model="mainForm.cardNumber"
                  show-stops
                  :max="12"
                >
                </el-slider>
              </el-form-item>
              <el-form-item
                label="魔陷类型"
                v-show="showrightAttributeType"
              >
                <el-radio-group v-model="mainForm.rightAttributeType">
                  <el-radio-button
                    v-for="item in rightAttributeTypeList"
                    :key="item.value"
                    :label="item.value"
                  >{{item.label}}</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="卡图">
                <el-input v-model="mainForm.innerImgSrc"></el-input>
              </el-form-item>
              <el-form-item label="卡包信息">
                <el-input v-model="mainForm.cardbagStr"></el-input>
              </el-form-item>
              <race-form
                @setRaceStr="setRaceStr"
                v-show="showRaceForm"
              ></race-form>
              <el-row v-show="showATKDEF">
                <el-col :span="12">
                  <el-form-item label="攻击力">
                    <el-input v-model="mainForm.atkStr"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="防御力">
                    <el-input v-model="mainForm.defStr"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="效果文本">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 8}"
                  placeholder="请输入效果文本"
                  v-model="mainForm.contentHtml"
                >
                </el-input>
              </el-form-item>
              <el-form-item label="卡片id">
                <el-input v-model="mainForm.cardIdStr"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <el-tag
              type="info"
              effect="dark"
            >高级参数</el-tag>
          </template>
          <div>简化流程：设计简洁直观的操作流程；</div>
        </el-collapse-item>
      </el-collapse>

    </el-card>
  </div>
</template>

<script>
import RaceForm from "./RaceForm";
export default {
  name: "main-form",
  components: { RaceForm },
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
  computed: {
    showCardAcctribute() {
      return (
        [
          "normal",
          "effect",
          "ceremony",
          "fuse",
          "homologue",
          "xyz",
          // "magic",
          // "trap",
          // "derivative",
        ].indexOf(this.mainForm.cardType) != -1
      );
    },
    showcardNumber() {
      return (
        [
          "normal",
          "effect",
          "ceremony",
          "fuse",
          "homologue",
          "xyz",
          // "magic",
          // "trap",
          // "derivative",
        ].indexOf(this.mainForm.cardType) != -1
      );
    },
    showrightAttributeType() {
      return (
        [
          // "normal",
          // "effect",
          // "ceremony",
          // "fuse",
          // "homologue",
          // "xyz",
          "magic",
          "trap",
          // "derivative",
        ].indexOf(this.mainForm.cardType) != -1
      );
    },
    showRaceForm() {
      return (
        [
          "normal",
          "effect",
          "ceremony",
          "fuse",
          "homologue",
          "xyz",
          // "magic",
          // "trap",
          // "derivative",
        ].indexOf(this.mainForm.cardType) != -1
      );
    },
    showATKDEF() {
      return (
        [
          "normal",
          "effect",
          "ceremony",
          "fuse",
          "homologue",
          "xyz",
          // "magic",
          // "trap",
          // "derivative",
        ].indexOf(this.mainForm.cardType) != -1
      );
    },
  },
  data() {
    return {
      activeName: ["1", "2"],
      cardTypeList: [
        {
          value: "normal",
          label: "通常",
        },
        {
          value: "effect",
          label: "效果",
        },
        {
          value: "ceremony",
          label: "仪式",
        },
        {
          value: "fuse",
          label: "融合",
        },
        {
          value: "homologue",
          label: "同调",
        },
        {
          value: "xyz",
          label: "超量",
        },
        {
          value: "magic",
          label: "魔法",
        },
        {
          value: "trap",
          label: "陷阱",
        },
        {
          value: "derivative",
          label: "衍生物",
        },
      ],
      cardAcctributeList: [
        {
          value: "dirt",
          label: "地",
        },
        {
          value: "water",
          label: "水",
        },
        {
          value: "fire",
          label: "炎",
        },
        {
          value: "wind",
          label: "风",
        },
        {
          value: "light",
          label: "光",
        },
        {
          value: "dark",
          label: "暗",
        },
        {
          value: "god",
          label: "神",
        },
        // {
        //   value: "magic",
        //   label: "魔",
        // },
        // {
        //   value: "trip",
        //   label: "罠",
        // },
      ],
      rightAttributeTypeList: [
        {
          value: "normal",
          label: "普通",
        },
        {
          value: "sustain",
          label: "永续",
        },
        {
          value: "quick",
          label: "速攻",
        },
        {
          value: "equip",
          label: "装备",
        },
        {
          value: "environment",
          label: "场地",
        },
        {
          value: "ceremony",
          label: "仪式",
        },
        {
          value: "counterattack",
          label: "反击",
        },
      ],
    };
  },
  methods: {
    setRaceStr(value) {
      this.mainForm.raceStr = value;
    },
  },
};
</script>
<style>
.card-center {
  display: flex;
  justify-content: center;
}
.main-form-box {
  max-width: 800px;
  width: 100%;
}
.el-card__body {
  padding: 0 4px;
}
</style>