<template>
  <div>
    <div class="echarts-block">
      <v-chart :options="chartData" v-if="chartData" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import XLSX from 'xlsx'
import baseMixins from '@/mixins/baseMixins'
import * as theme from './theme'

export default {
  mixins: [baseMixins],
  components: {},
  props: [],
  data() {
    return {
      chartData: null
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
      let metadata = result[2].sheet
      console.log('所选表格元数据为：')
      console.log(metadata)

      var chart_data = {}

      // 获取Excel里的日期数组
      let dateArr = Object.keys(metadata[0])
      dateArr.remove('Tag')

      // 截取日期
      // let startDay = '11/07'
      // dateArr.splice(dateArr.findIndex((i) => i == startDay) + 1)

      // series数据
      chart_data = metadata.map((i) => {
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
            formatter: '{a}: {@[1]}'
          }
        }
        return obj
      })
      // 截取数组，选择显示的个数
      chart_data.splice(8)

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
          axisLabel: {
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
        yAxis: [
          {
            type: 'value',
            show: true,
            // max: 2100,
            splitLine: {
              show: true
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        series: data
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