<template>
  <div class="echarts-block">
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
          trigger: "axis"
        },
        legend: {
          bottom: 0
        },
        grid: {
          top: '5%',
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
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
            name: "蒸发量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              -23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              -26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "降水量3",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              -26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
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