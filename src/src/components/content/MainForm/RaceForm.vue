<template>
  <!-- 种族这里的控件-->
  <el-form-item label="种族信息">
    <el-select
      v-model="race1"
      placeholder="请选择种族"
      @change="emitRaceStr"
    >
      <el-option
        v-for="item in raceList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="race2"
      multiple
      placeholder="请选择类型"
      @change="emitRaceStr"
    >
      <el-option
        v-for="item in race2List"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: "race-form",
  components: {},
  props: {},
  computed: {
    raceStr() {
      return `【${this.race1}族／${this.race2.join("／")}】`;
    },
  },
  data() {
    return {
      race1: "",
      race2: [],
      raceList: [
        "龍",
        "惡魔",
        "機械",
        "魔法師",
        "天使",
        "雷",
        "不死",
        "昆蟲",
        "水",
        "戰士",
        "恐龍",
        "炎",
        "獸戰士",
        "巖石",
        "爬蟲",
        "獸",
        "魚",
        "植物",
        "鳥獸",
        "海龍",
        "幻龍",
        "幻神獸",
        "念動力",
        "電子界",
        "創造神",
      ],
      race2List: [
        "通常",
        "反轉",
        "調整",
        "卡通",
        "同盟",
        "靈魂",
        "二重",
        // "靈擺",
        "特殊召喚",
        // "連接",
        "效果",
        "儀式",
        "融合",
        "同調",
        "超量",
      ],
    };
  },
  mounted() {
    this.emitRaceStr();
  },
  methods: {
    // 发送raceStr
    emitRaceStr() {
      this.$emit("setRaceStr", this.raceStr);
    },
  },
};
</script>
<style scoped>
</style>