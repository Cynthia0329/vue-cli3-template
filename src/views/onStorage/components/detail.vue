<template>
  <div>
    {{ dTest }}
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'

export default {
  mixins: [baseMixins],
  components: {},
  props: [],
  data() {
    return {
      dTest: '旧数据'
    }
  },
  mounted() {
    // 接收方
    let that = this
    window.addEventListener('storage', function () {
      if (localStorage.getItem('just-for-test')!==undefined) {
        that.dTest = '我变成新数据啦~~~~'
      }
    })
  },
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>