<template>
  <div class="wrapper">
    <scrollbar ref="scrollbar" style="max-height:290px;">
      <ul style="width:300px;">
        <li v-for="item in 2000" :key="item">
          <p class="tl">测试测试测试测试</p>
          <!-- <p class="tl">内容特别长的时候，滚动条的大小也不会特别小</p> -->
        </li>
      </ul>
    </scrollbar>
    <p class="note">数据比较多的时候一定要用这个！不会过分缩小滚动条的大小</p>
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