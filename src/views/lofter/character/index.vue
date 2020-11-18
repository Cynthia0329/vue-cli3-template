<template>
  <div>
    <div class="echarts-block">
      <v-chart :options="chartData" v-if="chartData" />
    </div>
    <data-table v-if="tableData" :tableData="tableData"></data-table>
  </div>
</template>

<script>
import axios from 'axios'
import XLSX from 'xlsx'
import baseMixins from '@/mixins/baseMixins'
import * as theme from '@/styles/theme'
import dataTable from './dataTable'

export default {
  mixins: [baseMixins],
  components: {
    dataTable
  },
  props: [],
  data() {
    return {
      chartData: null,
      tableData: null
    }
  },
  mounted() {
    this.onlyReadFile()
  },
  methods: {
    // 读取本地Excel文件
    onlyReadFile() {
      var url = './lib/lofter.xlsx'
      axios
        .get(url, { responseType: 'arraybuffer' })
        .then((res) => {
          var data = new Uint8Array(res.data)
          var wb = XLSX.read(data, { type: 'array' })
          var sheets = wb.Sheets
          const result = []
          wb.SheetNames.forEach((sheetName) => {
            result.push({
              sheetName: sheetName,
              sheet: XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
            })
          })
          this.handleData(result)
        })
        .catch((err) => {
          console.log(err)
          console.error('读取文件错误')
        })
    },
    handleData(result) {
      // 选择子表
      let metadata = result[1].sheet
      console.log('所选表格元数据为：')
      console.log(metadata)

      var chart_data = {}

      // 获取Excel里的日期数组
      let dateArr = Object.keys(metadata[0])
      dateArr.remove('Tag')
      chart_data.xAxis = dateArr

      // 根据开始日期截取
      // let startDay = '11/07'
      // dateArr.splice(dateArr.findIndex((i) => i == startDay) + 1)
      // 根据日期个数截取
      // dateArr.splice(4)

      // 创建表格
      this.tableData = metadata

      // series数据
      chart_data.series = metadata.map((i) => {
        let arr = dateArr.map((key, index) => {
          let arr_inner = []
          arr_inner.push('2020/' + key)
          arr_inner.push(parseInt(i[key]))
          if (index === 0) {
            return {
              value: arr_inner,
              label: {
                // show: false,
                show: true,
                position: 'right'
              }
            }
          } else {
            return {
              value: arr_inner
            }
          }
        })
        let obj = {
          name: i['Tag'],
          type: 'line',
          data: arr,
          label: {
            fontSize: 10,
            formatter: '{a}: {@[1]}'
          }
        }
        return obj
      })
      console.warn(chart_data.series)
      // 截取数组，选择显示的个数
      chart_data.series.splice(10)
      // 过滤掉第一个
      // chart_data.series = chart_data.series.slice(1,(chart_data.series.length-1))

      console.log('图表数据为：')
      console.log(chart_data)
      this.setOption(chart_data)
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
          type: 'time',
          // maxInterval: 3600 * 24 * 1000 * 1,
          axisLine: {
            lineStyle: {
              color: '#999999',
            }
          },
          axisLabel: {
            color: '#999999',
            fontSize: 8,
            interval: 0,
            rotate: 45,
            formatter: function (value, index) {
              // 格式化成月/日
              var date = new Date(value)
              var texts = [date.getMonth() + 1, date.getDate()]
              return texts.join('/')
            }
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
  margin-bottom: 50px;
  width: $width;
  height: $height;
  border: 1px solid #eeeeee;
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>