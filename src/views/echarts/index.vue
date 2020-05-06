<template>
  <div>
    <h3 class="mb50">echarts图表</h3>
    <ul class="fl">
        <li><router-link :to="{path:'/'}">回到主页</router-link></li>
        <li class="mt30"><router-link :to="{path:'/echarts/demo01'}">1. 最简单的线性图表</router-link></li>
        <li class="mt30"><router-link :to="{path:'/echarts/demo02'}">2. 多条折线图堆叠</router-link></li>
        <li class="mt30"><router-link :to="{path:'/echarts/demo03'}">3. 标域markArea</router-link></li>
        <li class="mt30"><router-link :to="{path:'/echarts/demo04'}">4. 最简单的饼图1</router-link></li>
        <li class="mt30"><router-link :to="{path:'/echarts/demo05'}">5. 最简单的饼图2</router-link></li>
    </ul>
    <div class="fl ml30">
      <router-view></router-view>
    </div>
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
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
// 
</style>