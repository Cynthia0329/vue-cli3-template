<template>
  <div>
    <el-button type="primary" @click="tt()">自自定义全局弹框</el-button>
    <el-button type="warning" @click="demo02()">二次封装element弹窗</el-button>
    <confirm-dialog :isShow="isShow" @handleContinue="handleContinue">您确定清空所有收藏研报？</confirm-dialog>
  </div>
</template>

<script>
import confirmDialog from '@/components/element/confirmDialog.vue'

export default {
  mixins: [],
  components: { confirmDialog },
  props: [],
  data() {
    return {
      isShow: false
    }
  },
  mounted() {},
  methods: {
    tt() {
      this.$popup()
    },
    demo02() {
      this.isShow = true
    },
    handleContinue(result) {
      this.isShow = false
      if (result) {
        // 选择确定时执行
        console.log('确定~')
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>