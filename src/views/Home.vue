<template>
  <div class="home">
    <h1 class="mb50">主页面</h1>
    <ul class="demo">
      <li><router-link :to="{path:'/subpage'}">跳转空的子页面</router-link></li>
      <li><router-link :to="{path:'/echarts'}">echarts</router-link></li>
      <li><router-link :to="{path:'/theme'}">切换主题</router-link></li>
      <li><router-link :to="{path:'/scroll'}">滚动条</router-link></li>
      <li @click="tt()">弹窗组件</li>
    </ul>
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'

export default {
  name: 'home',
  mixins: [baseMixins],
  data() {
    return {}
  },
  mounted() {},
  components: {},
  methods: {
    tt() {
      this.$popup()
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.home {
  padding: 50px 50px;
}
.demo li {
  text-decoration: underline;
  list-style: disc;
  cursor: pointer;
}
</style>
