<template>
  <div>
    <div class="echarts-block">
      <v-chart :options="chartData" v-if="chartData" />
    </div>
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'
import * as theme from '@/styles/theme'

export default {
  mixins: [baseMixins],
  components: {},
  props: ['data'],
  data() {
    return {
      chartData: null
    }
  },
  mounted() {
    this.handleData()
  },
  methods: {
    handleData() {
      console.log(this.data)
      let chart = {}
      chart.xAxis = this.data[0].list.map((i) => `第${i.word}话`)
      console.log(chart.xAxis)

      // series数据
      chart.series = this.data.map((i) => {
        let arr = chart.xAxis.map((key, index) => {
          // console.log((chart.xAxis.length-1))
          if (index === (chart.xAxis.length-1)) {
            return {
              value: i.list[index].arg,
              label: {
                // show: false,
                show: true,
                position: 'right'
              }
            }
          } else {
            return {
              value: i.list[index].arg
            }
          }
        })
        let obj = {
          name: i['tag'],
          type: 'line',
          data: arr,
          label: {
            fontSize: 10,
            formatter: '{a}: {@[1]}'
          }
        }
        return obj
      })
      // 截取数组，选择显示的个数
      chart.series.splice(11)
      // 过滤掉第一个
      chart.series = chart.series.slice(1,(chart.series.length-1))
      this.setOption(chart)
    },
    setOption(data) {
      this.chartData = {
        color: theme.theme_sun02,
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          position: function (point, params, dom, rect, size) {
            // 固定在顶部
            return ['75%', '5%']
          }
        },
        legend: {
          show: false
        },
        grid: {
          left: '2%',
          right: '23%',
          top: '3%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: {
          data: data.xAxis,
          axisLine: {
            lineStyle: {
              color: '#999999'
            }
          },
          axisLabel: {
            color: '#999999',
            fontSize: 8,
            interval: 0,
            rotate: 45,
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          show: true,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#eeeeee'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#999999',
            fontSize: 10,
            formatter: function (val) {
              return val
            }
          }
        },
        series: data.series
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$width: 400px;
$rate: 750/1200; // 宽/高
$height: $width/$rate;
// $width: 600px;
// $height: 700px;

.echarts-block {
  // margin-top: 50px;
  // margin-bottom: 50px;
  width: $width;
  height: $height;
  border: 1px solid #eeeeee;
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>