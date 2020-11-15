<template>
  <div class="content">
    <h4>P站一周日均阅览数</h4>
    <span>11.02-11.08</span>
    <table v-if="tagArr">
      <thead>
        <tr>
          <th>序号</th>
          <th>Tag</th>
          <th>日均阅览数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tagArr">
          <td>{{ index + 1 }}</td>
          <td>{{ item.tagName }}</td>
          <td style="text-align: right">
            <code>{{ item.arg }}</code>
          </td>
        </tr>
      </tbody>
    </table>
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
      tagArr: null
    }
  },
  mounted() {
    this.promiseAll()
  },
  methods: {
    async promiseAll() {
      let tags = [
        '五悠',
        '虎伏',
        '伏虎',
        '五伏',
        '五夏',
        '夏五',
        '宿伏',
        '七五',
        '宿虎',
        '五棘',
        '五七',
        '乙五',
        '悠五',
        '七虎',
        '伏五',
        '虎宿',
        '伏乙'
      ]
      let that = this
      axios
        .all(tags.map(async (name) => await that.getTagRead(name)))
        .then((res) => {
          let arr = []
          res.forEach((item, index) => {
            arr.push(this.handleData(item, tags[index]))
          })
          arr.sort((a, b) => {
            return b.arg - a.arg
          })
          console.log(arr)
          this.tagArr = arr
        })
    },
    getTagRead(tagName) {
      return api.common.getTagRead(tagName)
    },
    handleData(res, tagName) {
      console.log(res)
      let new_month_arr = res[res.length - 1] // 最新一个月的阅览量数组
      let new_week_arr = new_month_arr.slice(7, 13) // 最新一周的阅览量：数组
      let week_sum = new_week_arr.reduce((prev, curr) => {  // 最新一周的阅览量：总和
          return prev + curr
        })
      let week_arg = parseInt(week_sum/new_week_arr.length) // 最新一周的阅览量：平均数
      return {
        tagName: tagName,
        arg: week_arg
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../scss/index.scss';
</style>