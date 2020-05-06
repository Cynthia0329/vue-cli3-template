<template>
  <div class="echarts-block mt30">
    <h3>最简单的线性图表</h3>
    <v-chart :options="echartsOption" />
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'

export default {
  mixins: [baseMixins],
  components: {},
  props: [],
  data() {
    return {
      echartsOption: {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
      }
    }
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