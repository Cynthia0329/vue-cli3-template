<template>
  <div class="content">
    <h4>P站每月-日均阅览数</h4>
    <table v-if="tagArr">
      <thead>
        <tr>
          <th>序号</th>
          <th>tag名字</th>
          <th v-for="item in tagArr">{{ item.month }}月</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tag, index) in tagArr[0].list">
          <td>{{ index + 1 }}</td>
          <td>{{ tag.tag }}</td>
          <td v-for="(item, idx) in tagArr" style="text-align: right">
            <code>{{ getArg(item.list[index].arr) }}</code>
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
    this.tagArr = api.mock.pv
  },
  methods: {
    // 计算平均数
    getArg(oldArr) {
      let arr = []
      oldArr.forEach(i => {
        if (i != 0) arr.push(i)
      })
      console.log(arr)
      let sum = arr.reduce((prev, curr) => {
        return prev + curr
      })
      let arg = parseInt(sum / arr.length)
      return arg
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../scss/index.scss';
</style>