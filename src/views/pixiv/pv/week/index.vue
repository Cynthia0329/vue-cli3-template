<template>
  <div class="content">
    <chart v-if="tableList" :data="tableList"></chart>
    <br>
    <h4>P站每话-日均阅览数</h4>
    <table v-if="tagArr">
      <thead>
        <tr>
          <th v-for="item in timeArr" width="45px">第{{ item.word }}话</th>
          <th>Tag</th>
          <th>序号</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableList">
          <td
            v-for="list in item.list"
            style="text-align: right"
            class="monospaced"
          >
            {{ list.arg }}
          </td>
          <td>{{ item.tag }}</td>
          <td>{{ index + 1 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as api from '@/api'
import axios from 'axios'

import chart from './chart'

export default {
  mixins: [],
  components: {
    chart
  },
  props: [],
  data() {
    return {
      tagArr: null,
      timeArr: null,
      tableList: null
    }
  },
  mounted() {
    this.tagArr = api.mock.pv
    this.timeArr = api.mock.range_arr
    this.handleData()
  },
  methods: {
    // 计算平均数
    getWeekArg(item, tag_index) {
      let pv = api.mock.pv
      let start_month = parseInt(this.$moment(item.rang[0]).format('M'))
      let start_day = parseInt(this.$moment(item.rang[0]).format('D'))
      let end_month = parseInt(this.$moment(item.rang[1]).format('M'))
      let end_day = parseInt(this.$moment(item.rang[1]).format('D'))
      // 判断两个日期是否为同一个月
      if (start_month === end_month) {
        let index = pv.findIndex((i) => i.month === start_month)
        let list = pv[index].list[tag_index]
        let weekArr = list.arr.slice(start_day - 1, end_day)
        let sum = weekArr.reduce((prev, curr) => {
          return prev + curr
        })
        let arg = parseInt(sum / weekArr.length)
        return arg
      } else {
        // 获取前一个月的部分
        let start_month_index = pv.findIndex((i) => i.month === start_month)
        let start_month_list = pv[start_month_index].list[tag_index]
        let weekArr = this.remove0(start_month_list.arr).slice(start_day - 1)
        // 获取后一个月的部分
        let end_month_index = pv.findIndex((i) => i.month === end_month)
        let end_month_list = pv[end_month_index].list[tag_index]
        let weekarr = end_month_list.arr.slice(0, end_day)
        // 拼接两个月的部分
        weekArr = weekArr.concat(weekarr)
        // 计算平均数
        let sum = weekArr.reduce((prev, curr) => {
          return prev + curr
        })
        let arg = parseInt(sum / weekArr.length)
        return arg
      }
      // let arr = []
      // oldArr.forEach(i => {
      //   if (i != 0) arr.push(i)
      // })
      // let sum = arr.reduce((prev, curr) => {
      //   return prev + curr
      // })
      // let arg = parseInt(sum / arr.length)
      // return arg
    },
    remove0(oldArr) {
      let arr = []
      oldArr.forEach((i) => {
        if (i != 0) arr.push(i)
      })
      return arr
    },
    handleData() {
      let arr = this.tagArr[0].list.map((item, inedx) => {
        let tag = item.tag
        let list = []
        this.timeArr.forEach((i) => {
          let arg = this.getWeekArg(i, inedx)
          list.push({
            word: i.word,
            arg: arg
          })
        })
        return {
          tag: tag,
          list: list
        }
      })
      arr.sort((a, b) => {
        return b.list[b.list.length - 1].arg - a.list[a.list.length - 1].arg
      })
      // arr.splice(10)
      this.tableList = arr
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../scss/index.scss';
// 等宽字体
.monospaced {
  font-family: 'Microsoft YaHei Mono';
}
.content {
  margin-bottom: 50px;
}
</style>