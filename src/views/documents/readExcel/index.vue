<template>
  <div>
    <el-upload
      action="/"
      :on-change="uploadChange"
      :show-file-list="false"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
      :auto-upload="false"
    >
      <el-button size="small" icon="el-icon-upload" type="primary"
        >导入数据</el-button
      >
    </el-upload>
  </div>
</template>

<script>
import Xlsx from 'xlsx'

export default {
  mixins: [],
  components: {},
  props: [],
  data() {
    return {}
  },
  mounted() {},
  methods: {
    uploadChange(file) {
      let self = this
      const types = file.name.split('.')[1]
      const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(
        (item) => {
          return item === types
        }
      )
      if (!fileType) {
        this.$message.error('文件格式错误，请重新选择文件！')
      }

      this.file2Xce(file).then((tab) => {
        // 预览输出数据
        if (tab && tab.length > 0) {
          console.log(tab[0].sheet)
        }
      })
    }, // 读取文件
    file2Xce(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        reader.onload = function (e) {
          const data = e.target.result
          this.wb = Xlsx.read(data, {
            type: 'binary'
          })
          const result = []
          this.wb.SheetNames.forEach((sheetName) => {
            result.push({
              sheetName: sheetName,
              sheet: Xlsx.utils.sheet_to_json(this.wb.Sheets[sheetName])
            })
          })
          resolve(result)
        }
        reader.readAsBinaryString(file.raw)
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>