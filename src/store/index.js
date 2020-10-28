import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 属性
import dirtSrc from "@/assets/img/a2.png";
import waterSrc from "@/assets/img/a4.png";
import fireSrc from "@/assets/img/a5.png";
import windSrc from "@/assets/img/a3.png";
import lightSrc from "@/assets/img/a1.png";
import darkSrc from "@/assets/img/a0.png";
import godSrc from "@/assets/img/a6.png";
import magicSrc from "@/assets/img/magic.png";
import tripSrc from "@/assets/img/trap.png";


const store = new Vuex.Store({
  state: {
    // 属性
    cardAcctribute: [
      {
        type: 'monster',
        value: 'dirt',
        src: dirtSrc,
        label: "地",
      },
      {
        type: 'monster',
        value: 'water',
        src: waterSrc,
        label: "水",
      },
      {
        type: 'monster',
        value: 'fire',
        src: fireSrc,
        label: "炎",
      },
      {
        type: 'monster',
        value: 'wind',
        src: windSrc,
        label: "风",
      },
      {
        type: 'monster',
        value: 'light',
        src: lightSrc,
        label: "光",
      },
      {
        type: 'monster',
        value: 'dark',
        src: darkSrc,
        label: "暗",
      },
      {
        type: 'monster',
        value: 'god',
        src: godSrc,
        label: "神",
      },
      {
        type: 'magicTrap',
        value: 'magic',
        src: magicSrc,
        label: "魔",
      },
      {
        type: 'magicTrap',
        value: 'trap',
        src: tripSrc,
        label: "罠",
      },
    ],
    // 卡片类型
    cardType: [
      {
        type: 'monster',
        value: 'normal',
        label: "通常",
        src: require("@/assets/img/0.png"),
      },
      {
        type: 'monster',
        value: 'effect',
        label: "效果",
        src: require("@/assets/img/1.png"),
      },
      {
        type: 'monster',
        value: 'ceremony',
        label: "仪式",
        src: require("@/assets/img/2.png"),
      },
      {
        type: 'monster',
        value: 'fuse',
        label: "融合",
        src: require("@/assets/img/3.png"),
      },
      {
        type: 'monster',
        value: 'homologue',
        label: "同调",
        src: require("@/assets/img/4.png"),
      },
      {
        type: 'monster',
        value: 'xyz',
        label: "超量",
        src: require("@/assets/img/5.png"),
      },
      {
        type: 'magicTrap',
        value: 'magic',
        label: "魔法",
        src: require("@/assets/img/6.png"),
      },
      {
        type: 'magicTrap',
        value: 'trap',
        label: "陷阱",
        src: require("@/assets/img/7.png"),
      },
      {
        type: 'derivative',
        value: 'derivative',
        label: "衍生物",
        src: require("@/assets/img/8.png"),
      },
    ],
    // 魔陷类型
    rightAttributeType: [
      {
        type: 'both',
        value: 'normal',
        label: "普通",
        src: '',
      },
      {
        type: 'both',
        value: 'sustain',
        label: "永续",
        src: require("@/assets/img/m1.png"),
      },
      {
        type: 'magic',
        value: 'quick',
        label: "速攻",
        src: require("@/assets/img/m2.png")
      },
      {
        type: 'magic',
        value: 'equip',
        label: "装备",
        src: require("@/assets/img/m3.png"),
      },
      {
        type: 'magic',
        value: 'environment',
        label: "场地",
        src: require("@/assets/img/m4.png"),
      },
      {
        type: 'magic',
        value: 'ceremony',
        label: "仪式",
        src: require("@/assets/img/m5.png")
      },
      {
        type: 'trap',
        value: 'counterattack',
        label: "反击",
        src: require("@/assets/img/m6.png")
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    // 属性数组
    cardAcctributeValues(state) {
      return state.cardAcctribute.map(x => x.value);
    },
    // 卡片类型数组
    cardTypeValues(state) {
      return state.cardType.map(x => x.value);
    },
    // 魔陷类型数组
    rightAttributeTypeValues(state) {
      return state.rightAttributeType.map(x => x.value);
    }
  },
  modules: {
  }
})

export default store;