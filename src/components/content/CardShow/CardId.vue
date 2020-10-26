<template>
  <div class="card-id">{{cardIdStr}}</div>
</template>

<script>
export default {
  name: "card-id",
  props: {
    cardIdStr: {
      type: String,
      default() {
        return ''
      }
    }
  },
  components: {},
  computed: {},
  data() {
    return {
    };
  },
};
</script>
<style scoped>
.card-id {
  position: absolute;
  bottom: 16px;
  left: 21px;
  font-family: "ITCStoneSerif";
  font-size: 14px;
}
</style>