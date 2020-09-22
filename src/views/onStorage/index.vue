<template>
  <div>
    <h2>标签页之间通信</h2>
    <br><br>
    <router-link :to="{name: 'detail'}" target="_blank">跳转详情页</router-link>
    <br><br><br>
    <button @click="updataTest()">修改页面数据</button>
    <br><br><br>
    <router-link :to="{path:'/'}">回到主页</router-link>
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'

export default {
  mixins: [baseMixins],
  components: {},
  props: [],
  data() {
    return {}
  },
  mounted() {},
  methods: {
    updataTest() {
      // 发送方
      localStorage.setItem('just-for-test', '测试用')
      setTimeout(function () {
        localStorage.removeItem('just-for-test')
      }, 500)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
