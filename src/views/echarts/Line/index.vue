<template>
  <div>
    <div class="tabs center">
      <el-radio-group v-model="activeType" style="margin-bottom: 30px;">
        <el-radio-button label="all">全部</el-radio-button>
        <el-radio-button label="other">其他</el-radio-button>
      </el-radio-group>
    </div>
    <div class="card-group">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [],
  components: {},
  props: [],
  data() {
    return {
      activeType: 'all'
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
/deep/ .el-radio-group {
  margin-top: 20px;
}
.tabs {
  border: 1px solid #000;
}
.card-group {
  border: 1px solid #000;
}
</style>