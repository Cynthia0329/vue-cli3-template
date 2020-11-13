<template>
  <div class="content">
    <h4>P站10月日均阅览数</h4>
    <span>10.01-10.31</span>
    <table v-if="tagArr">
      <thead>
        <tr>
          <th>序号</th>
          <th>tag名字</th>
          <th>日平均阅览数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tagArr">
          <td>{{ index+1 }}</td>
          <td>{{ item.tagName }}</td>
          <td style="text-align:right"><code>{{ item.Oct_arg }}</code></td>
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
      tagArr: null,
      exportData: {},
      tags: [
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
    }
  },
  mounted() {
    this.promiseAll()
  },
  methods: {
    async promiseAll() {
      let that = this
      axios.all(this.tags.map(async name => await that.getTagRead(name))).then(res => {
          let arr = []
          res.forEach((item, index) => {
            arr.push(this.handleData(item, this.tags[index]))
          })
          arr.sort((a,b) => {
            return b.Oct_arg-a.Oct_arg
          })
          console.log(arr)
          this.tagArr = arr
        }
      )
    },
    getTagRead(tagName) {
      return api.common.getTagRead(tagName)
    },
    handleData(res, tagName) {
      let OctArr = res[res.length - 2]
      let Oct_arg =
        OctArr.reduce((prev, curr) => {
          return prev + curr
        }) / OctArr.length
        return {
          tagName: tagName,
          Oct_arg: parseInt(Oct_arg)
        }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../scss/index.scss'
</style>