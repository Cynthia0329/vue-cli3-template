<template>
  <div class="main">
    <h3 class="mb50">滚动条组件</h3>
    <ul class="fl">
        <li><router-link :to="{path:'/'}">回到主页</router-link></li>
        <li class="mt30" @click="conName='demo01'"><a>el-scroll</a></li>
        <li class="mt30" @click="conName='demo02'"><a>ea-scroll</a></li>
    </ul>
    <div class="fl ml100">
      <component :is="conName"></component>
    </div>
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'
import demo01 from './components/demo01'
import demo02 from './components/demo02'

export default {
  mixins: [baseMixins],
  components: {
    demo01,
    demo02,
  },
  props: [],
  data() {
    return {
      conName: 'demo01'
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
// 引入全局scss
.main {
  width: 100%;
  margin: 50px 50px;
}
a {
  cursor: pointer;
  text-decoration: underline;
}
</style>