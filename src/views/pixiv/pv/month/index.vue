<template>
  <div class="main">
    <div class="left-block">
      <h4>P站每月-日均阅览数</h4>
      <table v-if="tableData">
        <thead>
          <tr>
            <th>序号</th>
            <th>tag名字</th>
            <th v-for="item in tableData[0].list">{{ item.month }}月</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData">
            <td>{{ index + 1 }}</td>
            <td>{{ item.tag }}</td>
            <td v-for="(list, idx) in item.list" style="text-align: right">
              <code>{{ list.arg }}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="right-block">
      <button @click="readMock()">读取mock数据</button>
      <br /><br />
      <button @click="readApi()">读取在线api数据</button>
    </div>
  </div>
</template>

<script>
import * as api from '@/api'
import axios from 'axios'

export default {
  mixins: [],
  components: {},
  props: [],
  data() {
    return {
      tableData: null,
    }
  },
  mounted() {
    // this.readMock()
  },
  methods: {
    // 计算平均数
    getArg(oldArr) {
      oldArr = this.remove0(oldArr) // 先去除数组中为0的数字
      let arr = []
      oldArr.forEach((i) => {
        if (i != 0) arr.push(i)
      })
      let sum = arr.reduce((prev, curr) => {
        return prev + curr
      })
      let arg = parseInt(sum / arr.length)
      return arg
    },
    // 读取本地数据
    readMock() {
      this.tableData = this.sortData(api.mock.pv)
    },
    // 读取在线api数据
    readApi() {
      this.promiseAll()
    },
    // 先将api数据整理成本地数据一样的格式
    async promiseAll() {
      let that = this
      axios
        .all(api.mock.tags.map(async (name) => await that.getTagRead(name)))
        .then((res) => {
          let arr = []
          this.tableData = this.sortData(this.backupData(res))
        })
    },
    getTagRead(tagName) {
      // 请求单个tag的阅览量数据
      return api.common.getTagRead(tagName)
    },
    backupData(data) {
      let export_month_arr = [10, 11]
      let pv = []
      export_month_arr.forEach((month) => {
        pv.push({
          month: month,
          list: this.monthData(data, month).list
        })
      })
      return pv
    },
    monthData(data, export_month) {
      // 整理某个月的数据
      let that = this
      let month = parseInt(this.$moment().format('M'))
      let export_month_index = 5 - (month - export_month)
      let list = []
      // 得到每个tag对应的最新6个月的数据
      api.mock.tags.forEach((tag, index) => {
        list.push({
          tag: tag,
          arr: that.remove0(data[index][export_month_index])
        })
      })
      let obj = {}
      let date = this.$moment().format('YYYY-MM-DD')
      obj.name = `${export_month}月P站阅览量`
      obj.getTime = date
      obj.list = list
      return obj
    },
    remove0(oldArr) {
      let arr = []
      oldArr.forEach((i) => {
        if (i != 0) arr.push(i)
      })
      return arr
    },
    // 整理数据并排序
    sortData(data) {
      // 先全部整理成数组格式
      let arr = []
      api.mock.tags.forEach((tag, index) => {
        arr.push({
          tag: tag,
          list: data.map(item => {
            return {
              month: item.month,
              arg: this.getArg(item.list[index].arr),
            }
          })
        })
      })
      arr.sort((a,b) => {
        return b.list[b.list.length-1].arg - a.list[a.list.length-1].arg
      })
      return arr
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../scss/index.scss';
.main {
  margin-top: 30px;
  margin-left: 30px;
}
.left-block {
  float: left;
  width: 350px;
}
.right-block {
  float: left;
  margin-left: 100px;
}
</style>