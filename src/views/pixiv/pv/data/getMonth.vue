<template>
  <div class="content">
    <h3 v-if="exportData.name">
      {{ exportData.name }}
    </h3>
    <br />
    <button type="primary" size="default" @click="promiseAll">
      下载某个月的数据
    </button>
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
    }
  },
  mounted() {},
  methods: {
    async promiseAll() {
      let that = this
      axios
        .all(api.mock.tags.map(async (name) => await that.getTagRead(name)))
        .then((res) => {
          let arr = []
          this.backupData(res)
        })
    },
    getTagRead(tagName) {
      // 请求单个tag的阅览量数据
      return api.common.getTagRead(tagName)
    },
    // 整理备份数据的格式
    backupData(data) {
      let that = this
      let month = parseInt(this.$moment().format('M'))
      let export_month = 11
      let export_month_index = 5 - (month-export_month)
      let list = []
      // 得到每个tag对应的最新6个月的数据
      api.mock.tags.forEach((tag, index) => {
        list.push({
          'tag': tag,
          arr: data[index][export_month_index]
        })
      })
      let obj = {}
      let date = this.$moment().format('YYYY-MM-DD')
      obj.name = `${export_month}月P站阅览量`
      obj.getTime = date
      obj.list = list
      this.exportData = obj
      let fileName= `${export_month}`
      this.downloadJson(fileName)
    },
    downloadJson(fileName) {
      // 将json数据导出文件下载
      let data = JSON.stringify(this.exportData)
      // 解决中文乱码
      let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(data)
      // 通过创建a标签实现
      let link = document.createElement('a')
      link.href = uri
      // 对下载的文件命名
      link.download = `${fileName}.json`
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