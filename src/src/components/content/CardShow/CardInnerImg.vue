<template>
  <div class="card-inner-img">
    <el-image
      class="card-inner-img-item"
      :src="innerImgSrc"
      object-fit="contain"
    >
    </el-image>
  </div>
</template>

<script>
export default {
  name: "card-inner-img",
  props: {
    innerImgSrc: {
      type: String,
      default() {
        return require("@/assets/img/inner.jpg");
      },
    },
  },
  components: {},
  computed: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.card-inner-img {
  position: absolute;
  top: 124px;
  left: 56px;
}
.card-inner-img-item {
  width: 353px;
  height: 354px;
}
</style>