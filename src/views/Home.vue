<template>
  <div class="home">
    <h1 class="mb50">主页面</h1>
    <ul>
      <li><router-link :to="{path:'/subpage'}">子页面</router-link></li>
      <li><router-link :to="{path:'/echarts'}">echarts</router-link></li>
    </ul>
    <div class="test">？？</div>
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
  components: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
// 此处删掉会导致scss无法统一引入
</style>
