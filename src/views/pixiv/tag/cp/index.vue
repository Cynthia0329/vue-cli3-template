<template>
  <div>
    <el-upload
      action="/"
      :on-change="uploadChange"
      :show-file-list="false"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
      :auto-upload="false"
    >
      <el-button size="small" icon="el-icon-upload" type="primary"
        >导入数据</el-button
      >
    </el-upload>
    <div class="echarts-block">
      <v-chart :options="chartData" v-if="chartData" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import XLSX from 'xlsx'
import transformSheets from './read_xlsx'    //导入转制函数
import baseMixins from '@/mixins/baseMixins'

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
    uploadChange(file) {
      let self = this
      const types = file.name.split('.')[1]
      const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(
        (item) => {
          return item === types
        }
      )
      if (!fileType) {
        this.$message.error('文件格式错误，请重新选择文件！')
      }

      this.file2Xce(file).then((tab) => {
        // 预览输出数据
        if (tab && tab.length > 0) {
          console.log(tab[0].sheet)
          let data = tab[0].sheet
          this.setOption(data)
        }
      })
    }, // 读取文件
    file2Xce(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        reader.onload = function (e) {
          const data = e.target.result
          this.wb = XLSX.read(data, {
            type: 'binary'
          })
          const result = []
          this.wb.SheetNames.forEach((sheetName) => {
            result.push({
              sheetName: sheetName,
              sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
            })
          })
          resolve(result)
        }
        reader.readAsBinaryString(file.raw)
      })
    },
    onlyReadFile() {  // 读取本地Excel文件
      let that = this
      var url = './lib/test.xlsx' 
      //读取二进制excel文件,参考https://github.com/SheetJS/js-xlsx#utility-functions
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
          let chart_data = result[0].sheet
           that.setOption(chart_data)
        })
        .catch((err) => {
          console.log(err)
          console.error('读取文件错误')
        })

      // this.file2Xce(file).then((tab) => {
      //   // 预览输出数据
      //   if (tab && tab.length > 0) {
      //     console.log(tab[0].sheet)
      //     let data = tab[0].sheet
      //     this.setOption(data)
      //   }
      // })
    },
    setOption(data) {
      this.chartData = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          bottom: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          top: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: data.map((i) => i['Tag'])
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              interval: 'auto'
              // formatter: function (value, index) {
              //   return value.toFixed(2) + '%'
              // }
            },
            show: true
          }
        ],
        series: [
          {
            name: '图',
            type: 'bar',
            stack: 'aa',
            data: data.map((i) => i['图'])
          },
          {
            name: '文',
            type: 'bar',
            stack: 'aa',
            data: data.map((i) => i['文'])
          },
          {
            name: '总',
            type: 'line',
            data: data.map((i) => i['总'])
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.echarts-block {
  margin-top: 50px;
}
</style>