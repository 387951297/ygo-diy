<template>
  <div class="card-cardbag">{{cardbagStr}}</div>
</template>

<script>
export default {
  name: "card-cardbag",
  props: {
    cardbagStr: {
      type: String,
      default() {
        return 'error cardbagStr'
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
.card-cardbag {
  position: absolute;
  top: 486px;
  right: 48px;
  font-family: 'ITCStoneSerif';
  font-size: 14px;
}
</style>