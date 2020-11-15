<template>
  <div></div>
</template>

<script>
import * as api from '@/api'
import axios from 'axios'
export default {
  mixins: [],
  components: {},
  props: [],
  data() {
    return {}
  },
  mounted() {
    api.common.getTagObj('五悠').then(res => {
      const data = res.body
      console.log(res.body)
      // 图（插画和漫画）
      const illust = data.illust.total
      const manga = data.manga.total
      // const illustManga = data.illustManga.total
      // 小说
      const novel = data.novel.total
      console.log('图：' + (illust+manga))
      console.log('文：' + novel)
      console.log('总' + (illust+manga+novel))
    })
  },
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>