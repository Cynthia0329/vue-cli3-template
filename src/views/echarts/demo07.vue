<template>
  <div class="echarts-block">
    <h3>饼图</h3>
    <v-chart :options="echartsOption1" />
  </div>
</template>

<script>
import baseMixins from "@/mixins/baseMixins";

export default {
  mixins: [baseMixins],
  components: {},
  props: [],
  data() {
    return {
      echartsOption1: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          bottom: 0
        },
        grid: {
          left: "3%",
          right: "4%",
          top: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: function(value, index) {
                return value.toFixed(2)+'%'
              }
            },
            show: true
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "bar",
            stack: "广告",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "广告",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "广告",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
        ]
      }
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
//
</style>