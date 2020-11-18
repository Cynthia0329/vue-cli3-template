<template>
  <div class="main">
    <div class="left-block">
      <table v-if="exportData.list">
        <thead>
          <tr>
            <th>序号</th>
            <th>Tag</th>
            <th>阅览量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in exportData.list">
            <td>{{ index + 1 }}</td>
            <td>{{ item.tag }}</td>
            <td style="text-align: right"><code>{{ item.pv }}</code></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="right-block">
      <button type="primary" size="default" @click="showData()" v-if="true">
        显示所有tag某天的数据
      </button>
      <br>
      <button type="primary" size="default" @click="downData()" v-if="true">
        下载所有tag某天的数据
      </button>
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
    // this.promiseAll()
  },
  methods: {
    showData() {
      this.promiseAll()
    },
    async downData() {
      this.downloadJson()
    },
    async promiseAll() {
      let that = this
      axios
        .all(this.tags.map(async (name) => await that.getTagRead(name)))
        .then((res) => {
          let arr = []
          this.handleData(res)
        })
    },
    getTagRead(tagName) {
      // 请求单个tag的阅览量数据
      return api.common.getTagRead(tagName)
    },
    // 整理数据的格式
    handleData(data) {
      // 数据导出备份
      let that = this
      let list = []
      // 得到每个tag对应的最新6个月的数据
      this.tags.forEach((tag, index) => {
        list.push({
          tag: tag,
          pv: data[index][data[index].length - 1][16] // 😆在这里输入日期哦
        })
      })
      // 给list排序
      list.sort((a, b) => {
        return b.pv - a.pv
      })
      let obj = {}
      let date = this.$moment().format('YYYY-MM-DD')
      let month = parseInt(this.$moment().format('M'))
      obj.name = `${date}P站阅览量`
      obj.getTime = date
      obj.list = list
      this.exportData = obj
      console.log('当前数据为')
      console.log(this.exportData)
    },
    downloadJson() {
      // 将json数据导出文件下载
      let date = this.$moment().format('YYYY-MM-DD')
      let data = JSON.stringify(this.exportData)
      // 解决中文乱码
      let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(data)
      // 通过创建a标签实现
      let link = document.createElement('a')
      link.href = uri
      // 对下载的文件命名
      link.download = `${date}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../scss/index.scss';
.main {
  padding-bottom: 30px;
  margin-top: 30px;
  .left-block {
    float: left;
    width: 40%;
    margin-left: 100px;
  }
  .right-block {
    float: left;
    button {
      display: block;
    }
  }
}
</style>