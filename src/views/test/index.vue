<template>
  <div>
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
      tagArr: null
    }
  },
  mounted() {
    this.promiseAll()
    // tags.forEach(name => {
    //   this.getTagRead(name)
    // })
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
      axios.all(tags.map(async name => await that.getTagRead(name))).then(res => {
          let arr = []
          res.forEach((item, index) => {
            arr.push(this.handleData(item, tags[index]))
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
table {
  border-collapse: collapse;
  margin-top: 8px;
  tr {
    // height: 10px;
  }
  td,
  th {
    border: 1px solid #23272c;
    padding: 2px 10px;
    font-size: 14px;
    text-align: center;
    // font-family: 'Microsoft YaHei Mono';
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