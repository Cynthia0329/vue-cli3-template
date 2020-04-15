<template>
  <div class="home">
    <h1>整个项目的主页面入口</h1>
    <ul class="catalog">
      <li><router-link :to="{path:'/base'}">基本图表组件页面</router-link></li>
    </ul>
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'

export default {
  name: 'home',
  data() {
    return {}
  },
  mixins: [baseMixins],
  mounted() {},
  components: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.catalog {
  list-style: none;
}
</style>
