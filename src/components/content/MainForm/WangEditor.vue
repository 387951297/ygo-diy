<template>
  <!-- 富文本-->
  <div id="wangeditor"></div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "wang-editor",
  components: {},
  props: {},
  computed: {},
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    // 创建编辑器
    this.editor = new E("#wangeditor");
    this.editor.config.menus = [
      // "head",
      // "bold",
      "fontSize",
      // "fontName",
      "italic",
      "underline",
      "strikeThrough",
      "indent",
      "lineHeight",
      "foreColor",
      // "backColor",
      // "link",
      // "list",
      "justify",
      // "quote",
      "emoticon",
      // 'image',
      // 'video',
      // 'table',
      // 'code',
      // "splitLine",
      "undo",
      "redo",
    ];
    this.editor.config.placeholder = "请输入效果文本";
    this.editor.config.zIndex = 0;
    this.editor.config.onchange = (newHtml) => {
      this.$emit("setContentHtml", newHtml);
    };
    this.editor.create();
  },
  beforeDestroy() {
    // 销毁编辑器
    this.editor.destroy();
    this.editor = null;
  },
  methods: {},
};
</script>
<style scoped>
</style>