<template>
  <div>
    <div class="main">
      <component :is="activeType" class="block"></component>
    </div>
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'
import echartLine from './Line'

export default {
  mixins: [baseMixins],
  components: {
    echartLine,
  },
  props: [],
  data() {
    return {
      activeType: 'echartLine',
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.main {
  width: 100%;
  margin: 0 auto;
  display: flex;
}
.title {
  padding: 10px 20px;
  border-bottom: 1px solid #eeeeee;
}
.sidebar {
  height: calc(100vh - 54px);
  flex: 0 0 200px;
  /deep/ .el-tabs{
    height: 100%;
  }
  /deep/ .el-tabs__header {
    width: 100%;
  }
  /deep/ .el-tabs__content {
    display: none;
  }
}
.block {
  flex: 1;
  padding: 20px;
}
</style>