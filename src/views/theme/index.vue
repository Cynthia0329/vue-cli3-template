<template>
  <div>
    <div class="block">
      <span>夜间模式</span>
      <el-switch v-model="isNight" active-text="" inactive-text="">
      </el-switch>
    </div>
    <router-link :to="{path:'/'}">回到主页</router-link>
  </div>
</template>

<script>
export default {
  mixins: [],
  components: {},
  props: [],
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
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.block {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  @include layout_bg_color;
  h1,a,span {
    @include font_icon_color_black;
  }
}
</style>