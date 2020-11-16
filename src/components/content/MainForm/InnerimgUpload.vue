<template>
  <!-- 图片上传组件-->
  <div>
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      :on-change="change"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      ref="innerimgUpload"
      :file-list="fileList"
    >
      <div
        slot="tip"
        class="el-upload__tip"
      >只能上传jpg、png、gif、webp文件，且不超过5MB</div>
      <i class="el-icon-plus"></i>
    </el-upload>
    <!-- 图片大图显示 -->
    <el-dialog :visible.sync="dialogVisible">
      <img
        width="353px"
        :src="dialogImageUrl"
        alt=""
        style="text-align: center;"
      >
    </el-dialog>
    <!-- vueCropper 剪裁图片实现-->
    <el-dialog
      title="图片剪裁"
      :visible.sync="cropperDialogVisible"
      top="5vh"
      :close-on-click-modal="false"
    >
      <div class="cropper-content">
        <div
          class="cropper"
          :style="cropperStyle"
        >
          <vueCropper
            ref="cropper"
            :img="option.img"
            :outputType="'png'"
            :autoCrop="true"
            :autoCropWidth="353"
            :autoCropHeight="354"
            :fixed="true"
            :info="false"
            :centerBox="true"
          ></vueCropper>
        </div>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="cropperDialogVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="finish"
        >确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "innerimg-upload",
  components: {},
  props: {},

  computed: {
    cropperStyle() {
      return {
        width: "900px",
        height: this.cropperHeight,
      };
    },
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      // 裁剪组件的基础配置option
      option: {
        img: "", // 裁剪图片的地址
      },
      cropperDialogVisible: false,
      cropperHeight: "600px",
      fileList: [],
    };
  },
  mounted() {},
  methods: {
    // 上传回调
    async change(file, fileList) {
      if (file.size / 1024 / 1024 >= 5) {
        this.$refs.innerimgUpload.clearFiles();
        this.$message.error("上传文件大小不能超过 5MB!");
        return false;
      }
      console.log(file.raw.type);
      if (
        file.raw.type !== "image/jpeg" &&
        file.raw.type !== "image/png" &&
        file.raw.type !== "image/gif" &&
        file.raw.type !== "image/webp"
      ) {
        this.$refs.innerimgUpload.clearFiles();
        this.$message.error("上传头像图片只能是 jpg、png、gif、webp 格式!");
        return false;
      }
      this.fileList = fileList.length > 1 ? [fileList[0]] : [];

      var img = new Image();
      img.src = file.url;
      await new Promise((resolve) => setTimeout(() => resolve(), 17)); // 给你一帧时间渲染
      const height = (parseFloat(img.height) / parseFloat(img.width)) * 900;
      this.cropperHeight = (height > img.height ? img.height : height) + "px";
      await this.$nextTick();

      this.option.img = file.url;
      this.cropperDialogVisible = true;
    },
    // 裁剪完回调
    async finish() {
      const data = await new Promise((resolve) =>
        this.$refs.cropper.getCropBlob((data) => resolve(data))
      );
      const url = window.URL.createObjectURL(data);
      this.$emit("setInnerImgUrl", url);
      this.cropperDialogVisible = false;
      this.fileList = [{ ...data, url }];
    },
    // 去除图片
    handleRemove(file, fileList) {
      this.$emit("setInnerImgUrl", require("@/assets/img/inner.jpg"));
    },
    // 预览图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>
<style scoped>
</style>