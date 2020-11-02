<template>
  <!-- 图片打印按钮-->
  <el-button
    @click="printImg"
    type="primary"
    icon="el-icon-printer"
  >打印</el-button>
</template>

<script>
import printJS from "print-js";

export default {
  name: "button-print-img",
  components: {},
  props: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async printImg() {
      this.$store.commit("startExportImg");
      await this.$nextTick();
      let canvas = await this.$html2canvas(
        document.getElementById("card-img"),
        {
          // backgroundColor: "transparent",
          allowTaint: true,
          useCORS: true,
          x: document.getElementById("card-img").offsetLeft + 17, // 为什么是17我也不知道
          scrollY: -window.pageYOffset,
          scrollX: -window.pageXOffset,
        }
      );
      canvas.style.width = "5.9cm";
      canvas.style.height = "8.6cm";
      let canvasDom = document.getElementById("print-canvas");
      canvasDom.appendChild(canvas);
      await this.$nextTick();
      printJS({
        printable: "print-canvas",
        type: "html",
      });
      canvasDom.removeChild(canvasDom.childNodes[0]);
      this.$store.commit("endExportImg");
    },
  },
};
</script>
<style scoped>
</style>