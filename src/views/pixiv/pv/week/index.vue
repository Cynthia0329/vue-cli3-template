<template>
  <div class="content">
    <chart v-if="tableList" :data="tableList"></chart>
    <br />
    <h4>P站每话-日均阅览数</h4>
    <table v-if="tagArr && tableType === 1">
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
            <template v-if="list.arg != 0">{{ list.arg }}</template>
            <template v-else>--</template>
          </td>
          <td>{{ item.tag }}</td>
          <td>{{ index + 1 }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="tagArr && tableType === 2">
      <thead>
        <tr>
          <th>序号</th>
          <th>Tag</th>
          <th>日均阅览量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableList">
          <td>{{ index + 1 }}</td>
          <td>{{ item.tag }}</td>
          <td style="text-align: right" class="monospaced">
            {{ item.list[item.list.length - 1].arg }}
          </td>
        </tr>
      </tbody>
    </table>
    <table v-if="tagArr && tableType === 3">
      <thead>
        <tr>
          <th>序号</th>
          <th>Tag</th>
          <th v-for="item in timeArr.slice(-2)" width="45px">
            第{{ item.word }}话
          </th>
          <th>增量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableList">
          <td>{{ index + 1 }}</td>
          <td>{{ item.tag }}</td>
          <td
            v-for="list in item.list.slice(-2)"
            style="text-align: right"
            class="monospaced"
          >
            <template v-if="list.arg != 0">{{ list.arg }}</template>
            <template v-else>--</template>
          </td>
          <td 
            style="text-align: right"
            class="monospaced">
            {{ item.add | num }}
          </td>
        </tr>
      </tbody>
    </table>
    <table v-if="tagArr && tableType === 4">
      <thead>
        <tr>
          <th>序号</th>
          <th>Tag</th>
          <th width="45px">
            第1话
          </th>
          <th width="45px">
            第{{ timeArr[timeArr.length-1].word }}话
          </th>
          <th>增量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableList">
          <td>{{ index + 1 }}</td>
          <td>{{ item.tag }}</td>
          <td
            style="text-align: right"
            class="monospaced"
          >
            <template v-if="item.list[0].arg != 0">{{ item.list[0].arg }}</template>
            <template v-else>--</template>
          </td>
          <td
            style="text-align: right"
            class="monospaced"
          >
            {{ item.list[item.list.length-1].arg }}
          </td>
          <td 
            style="text-align: right"
            class="monospaced">
            {{ item.add | num }}
          </td>
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
      tableList: null,
      tableType: 4,
      tableTypeArr: [
        {
          type: 1,
          val: '显示全部话数的数据'
        },
        {
          type: 2,
          val: '仅显示最新一话的数据'
        },
        {
          type: 3,
          val: '显示最新2话的数据，并计算差值'
        },
        {
          type: 4,
          val: '显示第1话和最新1话的数据，并计算差值'
        },
      ]
    }
  },
  filters: {
    num: function (val) {
      let num
      if (!isNaN(val)) {
        if (val > 10000) {
          num = (val/10000).toFixed(1) + 'w'
          return num
        } else return val
      }
      else return val
    }
  },
  mounted() {
    this.tagArr = api.mock.pv
    this.timeArr = api.mock.range_arr
    this.handleData()
  },
  methods: {
    // 得到每一话对应的数组
    getWeekArr(item, tag_index) {
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
        return weekArr
      } else {
        // 获取前一个月的部分
        let start_month_index = pv.findIndex((i) => i.month === start_month)
        let start_month_list = pv[start_month_index].list[tag_index]
        let weekArr = this.utils
          .remove0(start_month_list.arr)
          .slice(start_day - 1)
        // 获取后一个月的部分
        let end_month_index = pv.findIndex((i) => i.month === end_month)
        let end_month_list = pv[end_month_index].list[tag_index]
        let weekarr = end_month_list.arr.slice(0, end_day)
        // 拼接两个月的部分
        weekArr = weekArr.concat(weekarr)
        return weekArr
      }
    },
    // 计算数组平均数
    getArrArg(arr) {
      let sum = arr.reduce((prev, curr) => {
        return prev + curr
      })
      let arg = parseInt(sum / arr.length)
      return arg
    },
    handleData() {
      let arr = this.tagArr[0].list.map((item, inedx) => {
        let tag = item.tag
        let list = []
        this.timeArr.forEach((i) => {
          let arr = this.getWeekArr(i, inedx)
          list.push({
            word: i.word,
            arg: this.getArrArg(arr)
          })
        })
        return {
          tag: tag,
          list: list,
          add: this.getLatestAdd(list, tag)
        }
      })
      // 默认按照最新数据排序
      arr.sort((a, b) => {
        return b.list[b.list.length - 1].arg - a.list[a.list.length - 1].arg
      })
      // 按照增量排序
      if ([3, 4].includes(this.tableType)) {
        console.log('按照增量排序')
        arr.sort((a, b) => {
          return b.add - a.add
        })
      }
      // arr.splice(10)
      this.tableList = arr
    },
    // 计算两话的差值
    getLatestAdd(list, tag) {
      let add
      // 计算最新两话
      if (this.tableType === 3) {
        add = list[list.length - 1].arg - list[list.length - 2].arg
      } 
      // 计算一开始到最新
      else if (this.tableType === 4) {
        add = list[list.length - 1].arg - list[0].arg
      }
      return add
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