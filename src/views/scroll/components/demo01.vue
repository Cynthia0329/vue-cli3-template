<template>
  <div class="wrapper">
    <el-scrollbar wrap-class="scroll-body" :native="false">
      <ul style="width:300px;">
        <li v-for="item in 20" :key="item">
          <p class="tl">最长200px，小于则不显示滚动条</p>
        </li>
      </ul>
    </el-scrollbar>
    <p class="note">适合数据较少的情况，滚动条的大小随数据的条数变化</p>
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'

export default {
  mixins: [baseMixins],
  components: {},
  props: [],
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../current';

// 重置组件样式，隐藏横向滚动条
/deep/ .el-scrollbar__wrap{
  overflow-x: hidden;
  padding-bottom: 15px;
}
/deep/ .scroll-body {
  max-height: 200px;
}
</style>