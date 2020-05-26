<template>
  <div class="home">
    <h1 class="mb50">主页面</h1>
    <ul class="fl">
      <li><router-link :to="{path:'/subpage'}">子页面</router-link></li>
      <li><router-link :to="{path:'/echarts'}">echarts</router-link></li>
      <li><router-link :to="{path:'/scroll'}">滚动条</router-link></li>
    </ul>
    <span>夜间模式</span>
    <el-switch v-model="isNight" active-text="" inactive-text="">
    </el-switch>
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'

export default {
  name: 'home',
  mixins: [baseMixins],
  data() {
    return {
      isNight: false
    }
  },
  watch: {
    isNight: function (val) { // 根据主题开关，切换不同的属性名来切换主题
      if (val) {
        window.document.documentElement.setAttribute('data-theme', 'theme-night')
      } else {
        window.document.documentElement.setAttribute('data-theme', 'theme-sun')
      }
    },
  },
  mounted() {},
  components: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.home {
  @include layout_bg_color;
  padding: 50px 50px;
}
h1,a,span {
  @include font_icon_color_black;
}
</style>
