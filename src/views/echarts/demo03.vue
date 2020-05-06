<template>
  <div class="echarts-block">
    <h3>标域markArea</h3>
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
      echartsOption1: { // 标准的数据格式
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["意向", "预购", "成交"]
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { show: true, type: ["stack", "tiled"] },
            saveAsImage: { show: true }
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "成交",
            type: "line",
            smooth: false,
            markArea: {
              silent: true,
              data: [
                [
                  {
                    xAxis: "周二"
                  },
                  {
                    xAxis: "周三"
                  }
                ]
              ]
            },
            data: [10, 12, 21, 54, 260, 830, 710]
          },
          {
            name: "预购",
            type: "line",
            smooth: false,
            markArea: {
              silent: true,
              data: [
                [
                  {
                    xAxis: "周三"
                  },
                  {
                    xAxis: "周四"
                  }
                ]
              ]
            },
            data: [30, 182, 434, 791, 390, 30, 10]
          },
          {
            name: "意向",
            type: "line",
            smooth: false,
            markArea: {
              silent: true,
              data: [
                [
                  {
                    xAxis: "周五"
                  },
                  {
                    xAxis: "周六"
                  }
                ]
              ]
            },
            data: [1320, 1132, 601, 234, 120, 90, 20]
          }
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