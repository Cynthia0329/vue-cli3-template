<template>
  <div>
    <el-button type="primary" @click="tt()">点击测试</el-button>
  </div>
</template>

<script>
export default {
  mixins: [],
  components: {},
  props: [],
  data() {
    return {}
  },
  mounted() {},
  methods: {
    tt() {
      this.$popup()
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>