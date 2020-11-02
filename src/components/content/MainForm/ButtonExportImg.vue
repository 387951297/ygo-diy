<template>
  <!-- 图片导出按钮-->
  <el-button
    @click="exportImg"
    type="primary"
    icon="el-icon-download"
  >下载</el-button>
</template>

<script>
export default {
  name: "button-export-img",
  components: {},
  props: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 图片导出
    async exportImg() {
      this.$store.commit("startExportImg");
      await this.$nextTick();
      const canvas = await this.$html2canvas(
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
      this.$Canvas2Image.saveAsPNG(canvas);
      this.$store.commit("endExportImg");
    },
  },
};
</script>
<style scoped>
</style>