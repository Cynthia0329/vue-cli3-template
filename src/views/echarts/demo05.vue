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
        // 标准的数据格式
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          icon: 'circle',
          right: 50,
          top: '10%',
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: '50%',
            center: ['35%', '30%'],
            avoidLabelOverlap: false,
            emphasis: {
              label: {
                show: true,
                fontSize: "14",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
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