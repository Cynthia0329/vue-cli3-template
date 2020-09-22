<template>
  <div>
    <li @click="tt()">弹窗组件</li>
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