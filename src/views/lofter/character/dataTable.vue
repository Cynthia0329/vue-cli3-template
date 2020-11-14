<template>
  <div>
    <button @click="sortBySum()" style="margin-right: 20px;">按最新总量排序</button>
    <button @click="sortByAdd()">按增量排序</button>
    <table v-if="tableData">
      <!-- <caption>Monthly savings</caption> -->
      <thead>
        <tr>
          <th style="background-color:#ffffff;">序号</th>
          <th style="background-color:#ffffff;">Tag</th>
          <th v-for="date in getDateArr(tableData[0])">{{ date }}</th>
          <td v-show="isShowAdd" style="font-size: 12px;background-color:#eeeeee;">
            增量
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData">
          <td>{{ index + 1 }}</td>
          <td style="background-color:#DEEBF6;">{{ item.Tag }}</td>
          <td 
            style="text-align: right"
            v-for="date in getDateArr(item)"
          >
            <code>{{ item[date] }}</code>
          </td>
          <td v-show="isShowAdd" style="background-color:#eeeeee;">
            {{ item[add.endDay] - item[add.startDay] }}
          </td>
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
      isShowAdd: true,
      add: {
        startDay: '11/07',
        endDay: '11/14'
      },
      table: []
    }
  },
  mounted() {},
  methods: {
    getDateArr(metadata) {
      let dateArr = Object.keys(metadata)
      dateArr.remove('Tag')
      dateArr.remove('本周增量')

      // 根据开始日期截取
      // let startDay = '11/07'
      // dateArr.splice(dateArr.findIndex((i) => i == startDay) + 1)

      // 根据日期个数截取
      dateArr.splice(2)
      return dateArr
    },
    sortByAdd() {
      this.table = this.tableData
      this.table.forEach(item => {
        item.add = item[this.add.endDay] - item[this.add.startDay]
      })
      this.table.sort((a, b) => {
        return b.add-a.add
      })
    },
    sortBySum() {
      this.table = this.tableData
      let dateArr = this.getDateArr(this.table[0])
      this.table.sort((a, b) => {
        return b[dateArr[0]]-a[dateArr[0]]
      })
    },
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
    background-color: #FFF2CC;
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