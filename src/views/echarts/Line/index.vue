<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  mixins: [],
  components: {},
  props: [],
  data() {
    return {
      activeType: 'all'
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
/deep/ .el-radio-group {
  margin-top: 20px;
}
.tabs {
  border: 1px solid #000;
}
.card-group {
  border: 1px solid #000;
}
</style>