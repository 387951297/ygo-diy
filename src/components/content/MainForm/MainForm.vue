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
                v-show="isMonster"
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
                v-show="isMonster"
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
                v-show="!isMonster"
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
                v-show="isMonster"
              ></race-form>
              <el-row v-show="isMonster">
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
        <!-- <el-collapse-item name="3">
          <template slot="title">
            <el-tag
              type="info"
              effect="dark"
            >高级参数</el-tag>
          </template>
          <div>简化流程：设计简洁直观的操作流程；</div>
        </el-collapse-item> -->
      </el-collapse>

    </el-card>
  </div>
</template>

<script>
import store from "@/store";
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
  watch: {
    "mainForm.cardType"(value) {
      // 非魔陷、属性为魔陷时，改成光
      if (
        this.isMonster &&
        ["trap", "magic"].indexOf(this.mainForm.cardAcctribute) != -1
      ) {
        this.mainForm.cardAcctribute = "light";
        return;
      }
      // 怪兽卡不watch
      if (this.isMonster) return;
      // 魔陷时 固定属性
      this.mainForm.cardAcctribute = value;
    },
  },
  computed: {
    // 根据卡片类型 判断是否为怪兽卡（实则为非魔陷）
    isMonster() {
      return (
        store.state.cardType.find((x) => x.value == this.mainForm.cardType)
          .type != "magicTrap"
      );
    },
    // 卡片类型列表
    cardTypeList() {
      return store.state.cardType;
    },
    // 卡片属性列表（不带魔陷）
    cardAcctributeList() {
      return store.state.cardAcctribute.filter((x) => x.type == "monster");
    },
    // 魔陷属性列表（区分魔陷）
    rightAttributeTypeList() {
      if (this.mainForm.cardType == "magic") {
        return store.state.rightAttributeType.filter(
          (x) => ["both", "magic"].indexOf(x.type) != -1
        );
      }
      if (this.mainForm.cardType == "trap") {
        return store.state.rightAttributeType.filter(
          (x) => ["both", "trap"].indexOf(x.type) != -1
        );
      }
      return store.state.rightAttributeType;
    },
  },
  data() {
    return {
      activeName: ["1", "2"],
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