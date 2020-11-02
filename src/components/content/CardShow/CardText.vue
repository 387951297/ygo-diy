<template>
  <div class="card-text">
    <p
      class="race"
      v-if="isMagicOrTrip"
    ><span
        v-for="(item, index) in pointStr"
        :key="item"
      >{{item}}<span
          class="race-point"
          v-if="index<pointStr.length-1"
        > · </span></span></p>
    <p
      class="content"
      v-html="contentHtml"
    ></p>
    <p
      class="atk-def"
      :style="atkDefStyle"
      v-if="isMagicOrTrip"
    >ATK/<span
        v-html="'&nbsp;'"
        v-for="item in atkSpaceNum"
        :key="item"
      ></span>{{atkStr}}<span v-html="'&nbsp;&nbsp;'"></span>DEF/<span
        v-html="'&nbsp;'"
        v-for="item in defSpaceNum"
        :key="item+99999"
      ></span>{{defStr}}</p>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "card-text",
  props: {
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
    raceStr: {
      type: String,
      default() {
        return "【】";
      },
    },
    atkStr: {
      type: String,
      default() {
        return "0";
      },
    },
    defStr: {
      type: String,
      default() {
        return "0";
      },
    },
    contentHtml: {
      type: String,
      default() {
        return "error";
      },
    },
  },
  components: {},
  computed: {
    // 找个办法显示·
    pointStr() {
      return this.raceStr.split("·");
    },
    atkSpaceNum() {
      let len = this.atkStr.length;
      if (len <= 5) {
        return (4 - len) * 2;
      }
      return 0;
    },
    defSpaceNum() {
      let len = this.defStr.length;
      if (len <= 5) {
        return (4 - len) * 2;
      }
      return 0;
    },
    isMagicOrTrip() {
      return (
        store.state.cardType.find((x) => x.value == this.cardType).type !=
        "magicTrap"
      );
    },
    // 攻守的style
    atkDefStyle() {
      return {
        lineHeight: store.state.atkDefLineHeight,
      }
    }
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.card-text {
  position: absolute;
  top: 512px;
  left: 42px;
  width: 381px;
  height: 127px;
}
.card-text .race,
.card-text .race-point {
  line-height: 17px;
  text-indent: -7px;
}
.card-text .race {
  font-family: "DFPLiShuW5-B5";
  font-size: 17px;
}
.card-text .race-point {
  font-family: "sans-serif";
  font-size: 11px;
}

.card-text .content {
  font-family: "DFPLiShuW5-B5";
  font-size: 12px;
  line-height: 12px;
  width: 384px;
}
.card-text .atk-def {
  width: 100%;
  border-top: black 1px solid;
  position: absolute;
  top: 102px;
  text-align: right;
  font-family: "MatrixBoldSmallCaps";
  font-size: 25px;
}
</style>