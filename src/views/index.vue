<template>
  <div class="home">
    <h1 class="mb50">主页面</h1>
    好烦哦，部署一个gitpage咋老出问题QAQ
    <ul class="demo">
      <li><router-link :to="{path:'/components-demo'}">组件demo演示</router-link></li>
      <li><router-link :to="{path:'/onStorage'}">利用onStorage，浏览器标签页之间通信</router-link></li>
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
  methods: {}
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
