<template>
  <div class="content">
    <h3 v-if="exportData.name">
      {{ exportData.name }}
    </h3>
    <br>
    <button type="primary" size="default" @click="promiseAll">下载数据</button>
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
  mounted() {},
  methods: {
    async promiseAll() {
      let that = this
      axios
        .all(this.tags.map(async (name) => await that.getTagRead(name)))
        .then((res) => {
          let arr = []
          this.backupData(res)
        })
    },
    getTagRead(tagName) { // 请求单个tag的阅览量数据
      return api.common.getTagRead(tagName)
    },
    backupData(data) {  // 整理备份数据的格式
      // 数据导出备份
      let that = this
      // 得到每个tag对应的最新6个月的数据
      this.tags.forEach((tag, index) => {
        this.exportData[tag] = data[index]
      })
      let obj = {}
      let date = this.$moment().format('YYYY-MM-DD')
      let month = parseInt(this.$moment().format('M'))
      obj.name = `${month - 5}-${month}月P站阅览量`
      obj.getTime = date
      obj.range = {
        start_month: month - 5,
        end_month: month
      }
      obj.list = this.exportData
      this.exportData = obj
      this.downloadJson()
    },
    downloadJson() {  // 将json数据导出文件下载
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
</style>