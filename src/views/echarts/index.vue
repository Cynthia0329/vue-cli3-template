<template>
  <div>
    <h3 class="mb50">echarts图表</h3>
    <ul>
        <li><router-link :to="{path:'/'}">回到主页</router-link></li>
        <li class="mt30"><router-link :to="{path:'/echarts/line01'}">line01</router-link></li>
    </ul>
    <router-view></router-view>
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