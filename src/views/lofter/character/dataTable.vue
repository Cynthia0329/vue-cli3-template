<template>
  <div>
    <button @click="sortBySum()" style="margin-right: 20px;">按最新总量排序</button>
    <button @click="sortByAdd()">按增量排序</button>
    <br></br>
    <table v-if="tableData && isShowType===1">
      <!-- <caption>Monthly savings</caption> -->
      <thead>
        <tr>
          <th v-for="date in getDateArr(tableData[0]).reverse()">{{ date }}</th>
          <th style="background-color:#ffffff;">Tag</th>
          <th style="background-color:#ffffff;">序号</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData">
          <template v-for="date in getDateArr(tableData[0]).reverse()">
            <td style="text-align: right" >
              <code v-if="item[date]">{{ item[date] }}</code>
              <code v-else>--</code>
            </td>
          </template>
          <td style="background-color:#DEEBF6;">{{ item.Tag }}</td>
          <td>{{ index + 1 }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="tableData && isShowType!==1">
      <thead>
        <tr>
          <th style="background-color:#ffffff;">序号</th>
          <th style="background-color:#ffffff;">Tag</th>
          <th v-for="date in getDateArr(tableData[0])">{{ date }}</th>
          <template v-if="isShowType!==4">
            <td style="font-size: 12px;background-color:#eeeeee;">
              增量
            </td>
            <td v-show="isShowType!==3" style="font-size: 12px;background-color:#eeeeee;">
              日均
            </td>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData">
          <td>{{ index + 1 }}</td>
          <td style="background-color:#DEEBF6;">{{ item.Tag }}</td>
          <template v-for="date in getDateArr(tableData[0])">
            <td style="text-align: right" >
              <code v-if="item[date]">{{ item[date] }}</code>
              <code v-else>--</code>
            </td>
          </template>
          <template v-if="isShowType!==4">
            <td v-if="item.add" style="background-color:#eeeeee;">
              {{ item.add }}
            </td>
            <template v-if="isShowType!==3">
              <td v-if="!isNaN(item.add)" style="background-color:#eeeeee;">
                {{ parseInt(item.add / dateInterval) }}
              </td>
              <td v-else style="background-color:#eeeeee;">
                -
              </td>
            </template>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  mixins: [],
  components: {},
  props: ['tableData'],
  data() {
    return {
      add: {
        startDay: '11/21',
        endDay: '11/23'
      },
      isShowType: 2,
      isShowObj: [
        {
          type: 1,
          val: '显示全部日期的数据'
        },
        {
          type: 2,
          val: '显示一周增量（计算日均）'
        },
        {
          type: 3,
          val: '显示一周增量（隐藏日均）'
        },
        {
          type: 4,
          val: '只显示最新的日期数据'
        }
      ],
      table: []
    }
  },
  computed: {
    dateInterval: function () {
      let startDay = this.$moment(this.add.startDay)
      let endDay = this.$moment(this.add.endDay)
      let interval = endDay.diff(startDay, 'day')
      return interval
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleData()
    }, 500)
  },
  methods: {
    getDateArr(metadata) {
      let dateArr = Object.keys(metadata)
      dateArr.remove('Tag')
      dateArr.remove('add')

      // 根据开始日期截取
      // let startDay = '11/07'
      // dateArr.splice(dateArr.findIndex((i) => i == startDay) + 1)

      // 根据日期个数截取
      switch (this.isShowType) {
        case 1:
          //
          break
        case 2:
          dateArr.splice(2)
          break
        case 3:
          dateArr.splice(2)
          break
        case 4:
          dateArr.splice(1)
          break
        default:
          break
      }
      return dateArr
    },
    handleData() {
      this.table = this.tableData
      let dateArr = this.getDateArr(this.table[0])
      // 计算增量
      this.table.forEach((item) => {
        if (item[this.add.endDay] && item[this.add.startDay]) {
          item.add = parseInt(item[this.add.endDay] - item[this.add.startDay])
        } else {
          item.add = '-'
        }
      })
      // 根据类型判断是否按增量排序
      if (this.isShowType === 2 || this.isShowType === 3) {
        this.sortByAdd()
      } else {
        this.sortBySum()
      }
    },
    sortByAdd() {
      this.table = this.tableData
      // this.table.forEach(item => {
      //   if (item[this.add.endDay] && item[this.add.startDay]) {
      //     item.add = item[this.add.endDay] - item[this.add.startDay]
      //   } else {
      //     item.add = '--'
      //   }
      // })
      this.table.sort((a, b) => {
        return b.add - a.add
      })
      // console.log('hhaha')
      // console.log(this.table)
    },
    sortBySum() {
      let dateArr = this.getDateArr(this.table[0])
      // 默认按总数排序
      this.table.sort((a, b) => {
        return b[dateArr[0]] - a[dateArr[0]]
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
table {
  border-collapse: collapse;
  margin-top: 8px;
  margin-bottom: 30px;
  td,
  th {
    border: 1px solid #23272c;
    padding: 2px 10px;
    font-size: 14px;
    text-align: center;
  }
  th {
    background-color: #fff2cc;
  }
  .td-hover a {
    font-size: 14px;
    &:hover {
      background: #0a0a0d;
      cursor: pointer;
      text-decoration: underline;
      color: #2ba3ff;
    }
  }
  .td-hover:hover {
    background: #0a0a0d;
  }
}
</style>